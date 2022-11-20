import { SessionUser } from '../models/session-user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class UserStorageService {
  private key: string = 'ng-auth';

  constructor() {}

  

  get isAuthenticated(): boolean {
    return localStorage.getItem(this.key) !== null;
  }

  set(object: any): void {
    localStorage.setItem(this.key, JSON.stringify(object));
  }

  destroy(): void {
    localStorage.removeItem(this.key);
  }
}
