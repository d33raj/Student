import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
url='http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students';
  constructor(private http:HttpClient) { }
  getStudents(){
    return this.http.get(this.url);
  } 
  addStudent(student:any){
    return this.http.post(this.url,student);
  }
  deleteStudent(id:any){
  return this.http.delete(this.url+"/"+id);
  }
  updateStudent(id:any,student:any){
    return this.http.put(this.url+"/"+id,student);
  }
  getStudentById(id:any)
  {
    return this.http.get(this.url+"/"+id);
  }
}
