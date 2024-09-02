import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {


  // case:number = 348;

  constructor() { }

  // results:Array<string> = [
  //   'Respuesta 1',
  //   'Respuesta 2',
  //   'Respuesta 3',
  //   'Respuesta 4'
  // ]
  // resultsA:Array<string> = []

  listUser:Array<{id:string, name:string}> =[
    {
      id:'1',
      name:'Angela'
    },
    {
      id:'2',
      name:'Sherlyn'
    },
    {
      id:'3',
      name:'Brandon'
    },
  ]

  ngOnInit(): void {
  }

}
