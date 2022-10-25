import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseNameSpace } from 'src/app/models/components/base.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  constructor(private http: HttpClient) {}

  /** Para realizar las peticiones GET */
  getService(reqParams: BaseNameSpace.GetConfig): Observable<any> {
    const headers = new HttpHeaders({
      accept: 'application/json',
    });

    const { params, url } = reqParams;

    const options = {
      params,
      headers: headers,
    };

    return this.http.get<T>(url, options).pipe(
      map((res) => {
        return res;
      }),
      catchError(this.handleError)
    );
  }

  /** Para realizar las peticiones POST */
  postService(reqParams: BaseNameSpace.PostConfig): Observable<T> {
    const headers = new HttpHeaders({
      accept: 'application/json',
    });

    const { url, params, body } = reqParams;
    const options = {
      headers,
      params,
    };

    return this.http.post<T>(url, body, options).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  /** Para realizar las peticiones PUT*/
  putService(reqParams: any): Observable<T> {
    const headers = new HttpHeaders({
      accept: 'application/json',
    });

    return this.http.put<T>(reqParams.url, reqParams.data, { headers }).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  /** Para realizar las peticiones DELETE*/
  deleteService(reqParams: any): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
      body: reqParams.data,
      params: reqParams.params,
    };

    return this.http.delete<T>(reqParams.url, options).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  /** Para realizar las peticiones PATCH*/
  patchService(reqParams: any): Observable<T> {
    const headers = new HttpHeaders({
      accept: 'application/json',
    });

    return this.http.patch<T>(reqParams.url, reqParams.data, { headers }).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    const mensajeError = error.error.status_message || 'Ocurrió un error';
    return throwError(() => mensajeError);
  }
}
