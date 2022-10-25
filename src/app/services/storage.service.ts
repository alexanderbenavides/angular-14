import { Injectable } from '@angular/core';
import { StorageNamePace } from '../models/storage/storage.model';
import { SecurityStorageService } from './security-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private readonly securityStorageService: SecurityStorageService
  ) { 
  }

  getLoginFlag(): boolean {
    return JSON.parse(sessionStorage.getItem(StorageNamePace.Storage.LoginFlag) || 'false');
  }

  setJsonValue(key: string, value: any) {
    this.securityStorageService.secureStorage.setItem(key, value);
  }
  getJsonValue(key: string) {
    return this.securityStorageService.secureStorage.getItem(key);
  }
  clearSessionData() {
    return this.securityStorageService.secureStorage.clear();
  }
  clearTokenParam(key: string) {
    return this.securityStorageService.secureStorage.removeItem(key);
  }
}
