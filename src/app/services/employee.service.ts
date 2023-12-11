import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }
  baseUrl = environment.api;
  // postData;
  postEmp(data: any) {
    return this._http.post<any>(`${this.baseUrl}/empList`, data)
  }
  // getData
  getEmp() {
    return this._http.get<any>(`${this.baseUrl}/empList`)
  }
  //  update
  putdateEmp(data: any, id: number) {
    return this._http.put<any>(`${this.baseUrl}/empList/${id}` , data)
  }
  // delete
  deleteEmp(id: number) {
    return this._http.delete<any>(`${this.baseUrl}/empList` + id)
  }
}
