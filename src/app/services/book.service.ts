import { Injectable } from '@angular/core';
// to get the data from api import HttpClient and Observable:
import { HttpClient } from '@angular/common/http';

// Observable is responsiable for req and respose form the server:
import { Observable } from 'rxjs/Observable';

// import the type of saiyan daya
import { Saiyan } from '../shared/saiyan';

@Injectable()
export class BookService {

  // create a url for our api:
  saiyanURL ="/api/saiyans";

  // inject the httpClient in constructor:
  constructor(private http: HttpClient) { }

  // create a function too get the details of data from the api:
  getSaiyanData(): Observable<Saiyan[]>{

    // ruturn the data:
    return this.http.get<Saiyan[]>(this.saiyanURL);
  }
}
