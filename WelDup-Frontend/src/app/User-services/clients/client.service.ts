import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../../api.urls';
import { Client } from '../../models/client.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  http = inject(HttpClient)

  registerClientService(registerObj: any): Observable<Client[]> {
    return this.http.post<any>(`${apiUrls.authApi}register-client`, registerObj)
  }

  loginClientService(loginObj: any): Observable<Client[]> {
    return this.http.post<any>(`${apiUrls.authApi}login-client`, loginObj)
  }

  //Getting the clients
  getAllClientService(): Observable<Client[]> {
    return this.http.get<any>(`${apiUrls.clientApi}clients`)
  }
  //deleting the clients
  deleteClient(id: String): Observable<Client[]> {
    return this.http.delete<any>(`${apiUrls.clientApi}delete/${id}`);
  }

}
