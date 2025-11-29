import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { title } from 'process';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../navbar/Interface/interface';

@Injectable({
  providedIn: 'root'
})
export class Products1Service {

  constructor(private http: HttpClient) { }
  
  private apiUrl = 'https://dummyjson.com/products';

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  deleteData(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`)
  }
}
