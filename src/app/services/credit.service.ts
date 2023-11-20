import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { ClientModule } from '../models/client.module';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class CreditService {
  base_Url = 'https://finanzas-api.azurewebsites.net/api/bank/v1/calculate-debt';
  httpOptions = this.getHttpOptions(); // Agregar la propiedad httpOptions

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  private getHttpOptions(): { headers: HttpHeaders } {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return { headers };
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error ocurred ${error.status},body was: ${error.error}`);
    } else {
      console.log(`Backend returned cod ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happend with request, try again');
  }

  getList(): Observable<ClientModule> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .get<ClientModule>(`${this.base_Url}`, httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getItem(id: string | null): Observable<ClientModule> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .get<ClientModule>(`${this.base_Url}/${id}`, httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteItem(id: string): Observable<ClientModule> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .delete<ClientModule>(`${this.base_Url}/${id}`, httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  createItem(client: ClientModule): Observable<ClientModule> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .post<ClientModule>(this.base_Url, client, httpOptions)
      .pipe(catchError(this.handleError));
  }
  createResult(calculateDebtId: number): Observable<any> {
    const httpOptions = this.getHttpOptions();
    const url = `${this.base_Url}/${calculateDebtId}/generate-payment-plans`;

    return this.http
      .post(url, {}, httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
}