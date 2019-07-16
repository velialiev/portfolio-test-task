import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public get<T>(url: string): Observable<T> {
    return this.http
      .get<T>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getWithHttpResonseData<T>(url: string): Observable<HttpResponse<T>> {
    return this.http
      .get<T>(url, {observe: 'response'})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
