import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = '/api/auth'; // змінна для зберігання базового URL

  constructor(private http: HttpClient) { }

  // метод для виконання запиту на сервер для авторизації користувача
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/login`, { email, password })
      .pipe(map(response => {
        // якщо авторизація успішна, зберегти токен доступу в localStorage
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
        }
        return response;
      }));
  }

  // метод для видалення токену доступу з localStorage
  logout(): void {
    localStorage.removeItem('currentUser');
  }

  // метод для перевірки наявності токену доступу в localStorage
  isAuthenticated(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser !== null;
  }

}

