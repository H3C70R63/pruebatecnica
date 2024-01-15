import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonDataServiceOrders {
  result: any[] = [];
  private jsonUrl =
    'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders';

  constructor(private http: HttpClient) {}

  getJsonData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
  
}
