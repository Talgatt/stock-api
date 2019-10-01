import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StockApiService {
  
  api_key = "A6V490YTYNB1D7ED";
  //baseUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=";
  baseUrl = 'https://www.alphavantage.co/query?'
  

  constructor(public _http: HttpClient) { }

  getDailyTimeSeries(){
    console.log(this.baseUrl);
    
    return this._http.get(`${this.baseUrl}function=TIME_SERIES_DAILY&symbol=MSFT&apikey=${this.api_key}`);
  }

  getIntraDayTimeSeries(){
    console.log(this.baseUrl);
    
    return this._http.get(`${this.baseUrl}function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=${this.api_key}`);
  }
}
