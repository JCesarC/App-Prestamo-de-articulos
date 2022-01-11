import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';

import { Articulo } from '@app/shared/models/articulo.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Articulo[]> {
    return this.http
      .get<Articulo[]>(`${environment.API_URL}/articulos`)
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Articulo> {
    return this.http
      .get<Articulo>(`${environment.API_URL}/articulos/${id}`)
      .pipe(catchError(this.handleError));
  }

  newArticulo(dataArticulo: Articulo): Observable<any> {
    return this.http
      .post<Articulo>(`${environment.API_URL}/articulos`, dataArticulo)
      .pipe(catchError(this.handleError));
  }

  updateArticulo(id: number, dataArticulo: Articulo): Observable<any> {
    return this.http
      .patch<Articulo>(`${environment.API_URL}/articulos/${id}`, dataArticulo)
      .pipe(catchError(this.handleError));
  }

  deleteArticulo(id: number): Observable<{}> {
    return this.http
      .delete<Articulo>(`${environment.API_URL}/articulos/${id}`)
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
