import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../../api.urls';
import { Product } from '../../models/product.model'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  http = inject(HttpClient)
  
  
    createProductService(createObj: any): Observable<Product[]> {
      return this.http.post<any>(`${apiUrls.productsApi}create-product`, createObj)
    }

   //Getting the products
    getAllProductService(): Observable<Product[]> {
      return this.http.get<Product[]>(`${apiUrls.productsApi}getAll-products`)
    }
    //deleting the products
    deleteProduct(id: String): Observable<Product[]> {
      return this.http.delete<any>(`${apiUrls.productsApi}delete/${id}`);
    }

}
