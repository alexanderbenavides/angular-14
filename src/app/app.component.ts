import { Component, OnInit } from '@angular/core';
import { StorageNamePace } from './models/storage/storage.model';
import { ApiService } from './services/apiService.service';
import { StorageService } from './services/storage.service';
import { ConstantUri } from './utils/contant.uri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-14';
  constructor(
    private readonly apiService: ApiService<any>,
    private readonly storageService: StorageService,
  ) {    
    if (!this.storageService.getJsonValue(StorageNamePace.Storage.RequestToken)) {
      this.apiService.getService(
        {
          params: {
            api_key: ConstantUri.apiKey,
          },
          url: ConstantUri.tokenNew,
        }
      ).subscribe(val => {
        const { request_token } = val;
        if (request_token) this.storageService.setJsonValue(StorageNamePace.Storage.RequestToken, request_token);
      });
    }

  }

  ngOnInit(): void {
  }
}
