import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
newStudentForm=new FormGroup({
  rollNo:new FormControl(),
  name:new FormControl(),
  age:new FormControl(),
  email:new FormControl(),
  date:new FormControl(),
  isMale:new FormControl(),
  
});
constructor(private studentService:StudentService){}

addNewStudent(){
  this.studentService.addStudent(this.newStudentForm.value).subscribe((data)=>
  {
    console.log(data);  
    console.log("Student added successfully");
    this.newStudentForm.reset();
    window.location.href='';
  });
  
}

}
