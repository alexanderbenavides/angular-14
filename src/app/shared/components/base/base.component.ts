import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseNameSpace } from 'src/app/models/components/base.model';
import { ApiService } from 'src/app/services/apiService.service';
import { ConstantUri } from 'src/app/utils/contant.uri';

@Component({
  selector: 'app-base',
  template: ``,
  styleUrls: []
})
export class BaseComponent<T extends any> implements OnInit {

  private _generalResponse: any;
  public get getGeneralResponse(): any {
    return this._generalResponse;
  }
  public set setGeneralResponse(value: any) {
    this._generalResponse = value;
  }

  postConfig: BaseNameSpace.PostConfig = {
    params: {
      api_key: ConstantUri.apiKey,
    },
    url: '',
    body: {}
  }

  getConfig: BaseNameSpace.GetConfig = {
    params: {
      api_key: ConstantUri.apiKey,
    },
    url: '',
  };

  isLoading = true;

  constructor(
    protected readonly apiService: ApiService<T>
  ) { }

  ngOnInit(): void {
  }

  postRequest(): void {
    this.apiService.postService(
      this.postConfig
    ).subscribe(val => {
      this.setGeneralResponse = val;
    });
  }

  getRequest(): void {
   this.apiService.getService(
    this.getConfig
    ).subscribe({
      next: response => {
        this.setGeneralResponse = response;
      },
      error: () => {this.isLoading = false;
      },
      complete: () => { this.isLoading = false; }
    });
  }

  isValidForm(form: FormGroup): boolean {
    if (form.invalid) {
      form.markAllAsTouched();
      for(const key in  form.controls) {
        form.controls[key].markAsDirty();
      }
      return false;
    }

    return true;
  }

}
