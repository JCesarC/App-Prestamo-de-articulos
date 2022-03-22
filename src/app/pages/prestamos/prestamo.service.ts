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
import { prestamoQuick } from '../../shared/models/prestamo.interface';

@Injectable({
  providedIn: 'root',
})
export class PrestamoService {
  constructor(private http: HttpClient) {}

  api = 'http://localhost:3000';

  getAll(): Observable<Prestamo[]> {
    return this.http
      .get<Prestamo[]>(`${environment.API_URL}/prestamos`)
      .pipe(catchError(this.handleError));
  }

  getEstatus(): Observable<Prestamo[]> {
    return this.http
      .get<Prestamo[]>(`${environment.API_URL}/prestamos/estatus`)
      .pipe(catchError(this.handleError));
  }

  newPrestamo(dataPrestamo: prestamoResponse): Observable<any> {
    return this.http
      .post<Prestamo>(`${environment.API_URL}/prestamos`, dataPrestamo)
      .pipe(catchError(this.handleError));
  }

  newPrestamoSolo(dataPrestamo: prestamoQuick): Observable<any> {
    return this.http
      .post<prestamoQuick>(
        `${environment.API_URL}/prestamos/solo`,
        dataPrestamo
      )
      .pipe(catchError(this.handleError));
  }

  confirmarPrestamo(id: number, dataPrestamo: prestamoUpdate) {
    return this.http
      .patch<any>(`${environment.API_URL}/prestamos/${id}`, dataPrestamo)
      .pipe(catchError(this.handleError));
  }

  deletePrestamo(id: number): Observable<any> {
    return this.http
      .delete<any>(`${environment.API_URL}/prestamos/${id}`)
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
