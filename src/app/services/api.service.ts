import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  getTypeRequest(url: any) {
    return this._http.get(`${environment.API_URL}${url}`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  
  postTypeRequest(url: any, payload: any){
    return this._http.post(`${environment.API_URL}${url}`, payload).pipe(map(res =>{
      return res;
    }))
  }

  putTypeRequest(url: any, payload: any) {
    return this._http.put(`${environment.API_URL}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }
}
