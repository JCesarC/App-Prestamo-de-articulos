import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, userResponse } from '@app/shared/models/user.interface';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  api = 'http://localhost:3000';

  getAll(): Observable<User[]> {
    return this.http
      .get<User[]>(`${environment.API_URL}/users`)
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<User> {
    return this.http
      .get<User>(`${environment.API_URL}/users/${id}`)
      .pipe(catchError(this.handleError));
  }

  newUser(dataUser: userResponse): Observable<any> {
    return this.http
      .post<User>(`${environment.API_URL}/users`, dataUser)
      .pipe(catchError(this.handleError));
  }

  updateUser(id: number, dataUser: userResponse): Observable<any> {
    return this.http
      .patch<User>(`${environment.API_URL}/users/${id}`, dataUser)
      .pipe(catchError(this.handleError));
  }

  deleteUser(id: number): Observable<any> {
    return this.http
      .delete<any>(`${environment.API_URL}/users/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: any): Observable<never> {
    let errorMessage = 'Error unknow';
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
