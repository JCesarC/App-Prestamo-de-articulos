import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
// import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';

import { Articulo, ArticuloResponse } from '@app/shared/models/articulo.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  constructor(private http: HttpClient) {}
  api = "http://localhost:3000"

  getAll(): Observable<Articulo[]> {
    return this.http
      .get<Articulo[]>(`${this.api}/articulos`)
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Articulo> {
    return this.http
      .get<Articulo>(`${this.api}/articulos/${id}`)
      .pipe(catchError(this.handleError));
  }

  newArticulo(dataArticulo: ArticuloResponse): Observable<any> {
    return this.http
      .post<Articulo>(`${this.api}/articulos`, dataArticulo)
      .pipe(catchError(this.handleError));
  }

  updateArticulo(id: number, dataArticulo: ArticuloResponse): Observable<any> {
    return this.http
      .patch<Articulo>(`${this.api}/articulos/${id}`, dataArticulo)
      .pipe(catchError(this.handleError));
  }

  deleteArticulo(id: number): Observable<any> {
    return this.http
      .delete<Articulo>(`${this.api}/articulos/${id}`)
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
