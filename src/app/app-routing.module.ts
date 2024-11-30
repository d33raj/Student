import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { GetStudentsComponent } from './get-students/get-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {
    path:'addStudent',
    component: AddStudentComponent
  },
  {
    path:'',
    component: GetStudentsComponent
  },
  {
    path:'updateStudent/:id',
    component: UpdateStudentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
