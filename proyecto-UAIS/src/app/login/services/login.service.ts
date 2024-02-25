import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = "http://127.0.0.1:8080";

  constructor(private http: HttpClient) { }

  login(usuario: Login): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, usuario);
  }

  // Método para almacenar el token en el localStorage
  setToken(token: string): void {
    localStorage.setItem('Token', token);
  }

  getToken(): String | null {
    return localStorage.getItem('Token');
  }

}
