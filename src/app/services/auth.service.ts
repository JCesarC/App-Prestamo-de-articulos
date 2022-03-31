import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private sesion = new BehaviorSubject(
    localStorage.getItem('userData') ? true : null
  );
  currentSesion = this.sesion.asObservable();

  getUserDetails() {
    if (localStorage.getItem('userData')) {
      return localStorage.getItem('userData');
    } else {
      return null;
    }
  }

  setDataInLocalStorage(varialeName: string, data: string) {
    this.sesion.next(true);
    localStorage.setItem(varialeName, data);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  clearStorage() {
    this.sesion.next(null);
    localStorage.clear();
  }
}
