import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hire } from '../../models/hires';
import { apiUrls } from '../../api.urls';

@Injectable({
  providedIn: 'root'
})
export class HiresService {

    http = inject(HttpClient)
    
    
      createHireService(createObj: any): Observable<Hire[]> {
        return this.http.post<any>(`${apiUrls.hireApi}create-hire`, createObj)
      }

     //Getting the Hires
      getAllHiresService(): Observable<Hire[]> {
        return this.http.get<Hire[]>(`${apiUrls.hireApi}getAll-hires`)
      }
      //deleting the Hires
      deleteHire(id: String): Observable<Hire[]> {
        return this.http.delete<any>(`${apiUrls.hireApi}delete-hires/${id}`);
      }
}
