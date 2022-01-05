import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Prestamo,
  prestamoResponse,
  prestamoUpdate,
} from '@app/shared/models/prestamo.interface';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PrestamoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Prestamo[]> {
    return this.http
      .get<Prestamo[]>(`${environment.API_URL}/prestamos`)
      .pipe(catchError(this.handleError));
  }

  newPrestamo(dataPrestamo: prestamoResponse): Observable<any> {
    return this.http
      .post<Prestamo>(`${environment.API_URL}/prestamos`, dataPrestamo)
      .pipe(catchError(this.handleError));
  }

  confirmarPrestamo(id:number,dataPrestamo: prestamoUpdate) {
    return this.http
      .patch<any>(`${environment.API_URL}/prestamos/${id}`, dataPrestamo)
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
