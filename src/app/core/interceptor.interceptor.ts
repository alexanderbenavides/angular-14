import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { StorageNamePace } from '../models/storage/storage.model';
import { ConstantUri } from '../utils/contant.uri';
import { Router } from '@angular/router';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(
    private readonly storageService: StorageService,
    private readonly router: Router,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): 
    Observable<HttpEvent<any>> {
      const currentUrls = request.url.includes(ConstantUri.tokenNew) || request.url.includes(ConstantUri.validateWithToken);
      if (!currentUrls && !this.storageService.getJsonValue(StorageNamePace.Storage.LoginFlag) && !this.storageService.getJsonValue(StorageNamePace.Storage.RequestToken)) {
        this.storageService.clearSessionData();
        this.router.navigate(['iniciar-sesion']);
      } else {
        request = request.clone({
          setHeaders: {
            accept: '*/*',
          },
        });
      }      
    return next.handle(request);
  }
}
