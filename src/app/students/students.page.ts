import { Component, OnInit } from '@angular/core';
import { GetAllStudentsService } from '../Providers/get-all-students.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {


  students: any;
  constructor(private getStudents: GetAllStudentsService) {
   }
   ngOnInit() {


          this.displayStudents();


  }

  displayStudents() {
    this.getStudents.getAllStudents().subscribe(res => {
      console.log(res);

      this.students = res;

     console.log('Students are ', this.students);
  });
  }

}
