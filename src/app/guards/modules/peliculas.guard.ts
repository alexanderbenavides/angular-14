import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageNamePace } from 'src/app/models/storage/storage.model';
import { StorageService } from 'src/app/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasGuard implements CanActivate {
  constructor(
    private readonly storageService: StorageService,
    private readonly router: Router,
  ) {

  }
  canActivate():boolean {    
    if (this.storageService.getJsonValue(StorageNamePace.Storage.RequestToken) && Boolean(this.storageService.getJsonValue(StorageNamePace.Storage.LoginFlag))) {
      return true;
    }
    this.router.navigate(['iniciar-sesion']);
    return false;
  }
  
}
