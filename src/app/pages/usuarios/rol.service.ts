import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rol, rolResponse } from '@app/shared/models/rol.interface';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Rol[]> {
    return this.http
      .get<Rol[]>(`${environment.API_URL}/rol`)
      .pipe(catchError(this.handleError));
  }

  newRol(dataRol: rolResponse): Observable<any> {
    return this.http
      .post<Rol>(`${environment.API_URL}/rol`, dataRol)
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Rol> {
    return this.http
      .get<Rol>(`${environment.API_URL}/rol/${id}`)
      .pipe(catchError(this.handleError));
  }

  updateRol(id: number, dataRol: rolResponse): Observable<any> {
    return this.http
      .patch<Rol>(`${environment.API_URL}/rol/${id}`, dataRol)
      .pipe(catchError(this.handleError));
  }

  deleteRol(id: number): Observable<any> {
    return this.http
      .delete<Rol>(`${environment.API_URL}/rol/${id}`)
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
