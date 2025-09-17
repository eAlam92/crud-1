import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   private apiURL = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {}
// get method
  getPost(){
    return this.http.get(this.apiURL);
  }
  // post method
  addPost(data: any):Observable<any>{
    return this.http.post(this.apiURL, data);
  }
  // put method
  updatePost(data: any, id:number):Observable<any>{
    return this.http.put(`${this.apiURL}/${id}`, data);
  }
  // delete method
  deletePost(id:number):Observable<any>{
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
