import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url = 'assets/data.json';
  private listaCambio = new Subject<User[]>();

  constructor(private http: HttpClient) {}
  listId(id:number){
    return this.http.get<User>(`${this.url}/${id}`);
  }

  list(): Observable<any> {
    return this.http.get<User[]>(this.url);
  }
  insert(Usuario: User) {
    return this.http.post(this.url, Usuario);
  }
  setList(listaNueva: User[]) {
    this.listaCambio.next(listaNueva);
  }
  getList(): Observable<User[]> {
    return this.listaCambio.asObservable();
  }  
  getUsuario(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url);
  }
}
