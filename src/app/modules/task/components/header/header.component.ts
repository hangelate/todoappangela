import { Component, OnInit } from '@angular/core';
import { TestCourseService } from '@shared/services/test-course.service';

@Component({
  selector: 'app-header', //TODO: el tag que usas para llamar este componente
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu: Array<{name:string, router:any}> = [
    {
      name: 'Link',
      router: []
    },
    {
      name: 'Requests',
      router: []
    },
    {
      name: 'Shipments',
      router: []
    },
    {
      name: 'Invoices',
      router: []
    },
    {
      name: 'Employees',
      router: []
    },
    {
      name: 'Settings',
      router: []
    }
  ]

  constructor(public testCourseService:TestCourseService) { }

  ngOnInit(): void {
  }

}
