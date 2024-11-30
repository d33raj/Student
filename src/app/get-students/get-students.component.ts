import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap'; // Import Bootstrap

@Component({
  selector: 'app-get-students',
  templateUrl: './get-students.component.html',
  styleUrls: ['./get-students.component.css']
})
export class GetStudentsComponent {
  studentData: any = '';
  studentToDeleteId: any = null; // Store the student ID to delete

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe((data: any) => {
      this.studentData = data;
      console.log(data);
    });
  }

  // Show the delete confirmation modal and set the student ID to be deleted
  confirmDelete(id: any) {
    this.studentToDeleteId = id; // Store the student ID to be deleted

    // Open the modal using Bootstrap's JS API
    const modalElement = document.getElementById('deleteModal');
    if (modalElement) {  // Check if modal element exists
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Perform the delete action
  deleteStudent() {
    if (this.studentToDeleteId) {
      this.studentService.deleteStudent(this.studentToDeleteId).subscribe(() => {
        this.loadStudents();
        this.studentToDeleteId = null; // Reset the student ID after deletion
        this.closeModal(); // Close the modal after deletion
      });
    }
  }

  // Close the modal
  closeModal() {
    const modalElement = document.getElementById('deleteModal');
    if (modalElement) {  // Check if modal element exists
      const modal = new bootstrap.Modal(modalElement);
      window.location.href='';
      modal.hide();  // Close the modal
    }
  }

  updateStudent(id: any) {
    this.router.navigate(['/updateStudent', id]);
  }
}
