import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  updateStudentForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
    this.updateStudentForm = new FormGroup({
      rollNo: new FormControl(''),
      name: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
      date: new FormControl(''),
      isMale: new FormControl(false)
    });
  }

  ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get('id'); 
    if (studentId) {
      this.studentService.getStudentById(studentId).subscribe((data: any) => {
        console.log('Fetched Data:', data);
        if (data) {
          this.updateStudentForm.patchValue({
            rollNo: data.rollNo,
            name: data.name,
            age: data.age,
            email: data.email,
            date: data.date,
            isMale: data.isMale
          });
        }
      });
    }
  }

  updateStudent() {
    const studentId = this.route.snapshot.paramMap.get('id'); // Get the ID again
    if (studentId) {
      this.studentService.updateStudent(studentId, this.updateStudentForm.value).subscribe(() => {
        alert('Student updated successfully');
      });
    }
  }
}
