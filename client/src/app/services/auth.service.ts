import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient,) {
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);


  }

  logIn(Data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<string>(`https://localhost:44330/api/User/login`, Data,
      { headers, responseType: 'text' as 'json' });
  }

  register(Data: any): Observable<any> {
    return this.http.post(`https://localhost:44330/api/User/register`, Data)
  }
}
