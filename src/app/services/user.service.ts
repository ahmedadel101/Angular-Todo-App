import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private _http:HttpClient) { }
  Url : "http://techsexperts.com/poogle/"
  registerData(data):Observable<any>{
      return this._http.post(`http://techsexperts.com/poogle/api/ContactUs`,data)
  }
}
