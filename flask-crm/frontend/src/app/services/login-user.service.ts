import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  // backend url
  url = 'https://completeit-backend.herokuapp.com';
  
  constructor(private http:HttpClient) { }

  // check that the user provided credentials are valid
  verifyUser(user:string, password:string): Observable<any> {

    const httpOptions = {
      // user data
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'user': user,
        'password': password
      })
    }
    return this.http.get<any>(this.url + "/login", httpOptions);
  }
}
