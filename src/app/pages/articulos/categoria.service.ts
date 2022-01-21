import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Categoria, CategoriaResponse } from '@app/shared/models/categoria.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}
  api = "http://localhost:3000"

  getAll(): Observable<Categoria[]> {
    return this.http
      .get<Categoria[]>(`${this.api}/categorias`)
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Categoria> {
    return this.http
      .get<Categoria>(`${this.api}/categorias/${id}`)
      .pipe(catchError(this.handleError));
  }

  newCategoria(dataCategoria: Categoria): Observable<any> {
    return this.http
      .post<Categoria>(`${this.api}/categorias`, dataCategoria)
      .pipe(catchError(this.handleError));
  }

  updateCategoria(id: number, dataCategoria: CategoriaResponse): Observable<any> {
    return this.http
      .patch<Categoria>(
        `${this.api}/categorias/${id}`,
        dataCategoria
      )
      .pipe(catchError(this.handleError));
  }

  deleteCategoria(id: number): Observable<{}> {
    return this.http
      .delete<Categoria>(`${this.api}/categorias/${id}`)
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
