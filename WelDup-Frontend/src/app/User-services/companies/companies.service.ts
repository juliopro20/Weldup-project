import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../../api.urls';
import { Observable } from 'rxjs';
import { Company } from '../../models/company.model'

@Injectable({
  providedIn: 'root'
})
export class CompaniesService { 
  http = inject(HttpClient)

  registerCompanyService(registerObj: any) {
    return this.http.post<any>(`${apiUrls.authApi}register-company`, registerObj)
  }

  loginCompanyService(loginObj: any) {
    return this.http.post<any>(`${apiUrls.authApi}login-company`, loginObj)
  }

  //Getting the companies
  getAllCompanyService(): Observable<Company[]> {
     return this.http.get<any>(`${apiUrls.companyApi}companies`)
   }
   //deleting the companies
  deleteCompany(id: String): Observable<Company[]> {
    return this.http.delete<any>(`${apiUrls.companyApi}delete/${id}`);
  }
}
