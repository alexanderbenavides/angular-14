import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginNameSpace } from 'src/app/models/components/login.model';
import { StorageNamePace } from 'src/app/models/storage/storage.model';
import { ApiService } from 'src/app/services/apiService.service';
import { StorageService } from 'src/app/services/storage.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ConstantUri } from 'src/app/utils/contant.uri';
import { properties } from 'src/assets/properties/properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent<LoginNameSpace.LoginResponse> implements OnInit {
  logo = properties.logo;
  formLogin: FormGroup = new FormGroup({});
  openAlert = false;
  override set setGeneralResponse(val: LoginNameSpace.LoginResponse) {
    const { request_token } = val;
    this.storageService.setJsonValue(StorageNamePace.Storage.RequestToken, request_token);
    this.storageService.setJsonValue(StorageNamePace.Storage.LoginFlag, 'true');
    this.openAlert = true;
    setTimeout(() => { this.router.navigate(['/populares']);  }, 2000);
  }
  constructor(
    private readonly fb: FormBuilder,
    protected override readonly apiService: ApiService<LoginNameSpace.LoginResponse>,
    private readonly storageService: StorageService,
    private readonly router: Router,
  ) {
    super(apiService);
  }

  override ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: [, Validators.required],
      password: [, Validators.required],
    });
  }

  login() {
    if (!this.isValidForm(this.formLogin)) return;
    const { username, password } = this.formLogin.value;
    const body = {
      username,
      password,
      request_token: this.storageService.getJsonValue(StorageNamePace.Storage.RequestToken)
    }
    this.postConfig.body = body;
    this.postConfig.url = ConstantUri.validateWithToken;    
    this.postRequest();
  }

}
