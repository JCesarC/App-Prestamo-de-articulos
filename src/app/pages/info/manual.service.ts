import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ManualService {
  constructor(private http: HttpClient) {}

  getDocument(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/manual`).pipe();
  }
}
