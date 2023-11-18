import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserDto } from '../models/user-dto.model';
import { Observable, throwError } from 'rxjs';
import { LoginUser } from '../models/login-user';
import { JwtDto } from '../models/JwtDto';
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'https://finanzas-api.azurewebsites.net/api/bank/v1/auth/';

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      // Default error handling
      console.log(`An error occurred: ${error.error.message}`)
    } else {
      // Unsuccessful response error code returned from backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }

  public newuser(newUser: UserDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'register', newUser)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  public login(loginUser: LoginUser): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUser)
    .pipe(
      retry(2),
      catchError(this.handleError));;
  }
}