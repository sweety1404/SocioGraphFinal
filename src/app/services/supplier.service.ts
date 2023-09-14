import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  public baseUrl = 'https://staging.iamdave.ai/list/supply';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-I2CE-ENTERPRISE-ID': 'dave_vs_covid',
      'X-I2CE-USER-ID': 'ananth+covid@i2ce.in',
      'X-I2CE-API-KEY': '0349234-38472-1209-2837-3432434',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  
  // Make a GET request
  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl, this.httpOptions);
  }

  
}
