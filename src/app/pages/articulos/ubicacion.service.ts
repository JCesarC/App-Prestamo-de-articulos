import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {
  Ubicacion,
  UbicacionResponse,
} from '../../shared/models/ubicacion.interface';
import { environment } from '@env/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UbicacionService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Ubicacion[]> {
    return this.http
      .get<Ubicacion[]>(`${environment.API_URL}/ubicacion`)
      .pipe();
  }

  newUbicacion(dataUbicacion: UbicacionResponse): Observable<any> {
    return this.http
      .post<Ubicacion>(`${environment.API_URL}/ubicacion`, dataUbicacion)
      .pipe(catchError(this.handleError));
  }

  updateUbicacion(
    id: number,
    dataUbicacion: UbicacionResponse
  ): Observable<any> {
    return this.http
      .patch<Ubicacion>(`${environment.API_URL}/ubicacion/${id}`, dataUbicacion)
      .pipe(catchError(this.handleError));
  }

  deleteUbicacion(id: number): Observable<any> {
    return this.http
      .delete<Ubicacion>(`${environment.API_URL}/ubicacion/${id}`)
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
