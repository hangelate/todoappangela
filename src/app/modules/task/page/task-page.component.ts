import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit, OnDestroy {


  groups:Array<any> = [];
  listObservable$:Array<Subscription> =[];

  constructor() { }
 


  ngOnInit(): void {

    const observable$ = interval(1000).subscribe((res) => {
      console.log('llamando')
    })

    this.listObservable$ = [observable$];

    this.groups = [
      {
        label: 'Nuevos',
        color: 'tomato',
        list:[
          {
            order:'Como instalar Angular',
            items:[
              {
                key: 'price',
                value: 152
              },
              {
                key: 'time',
                value: 152
              },
              {
                key: 'author',
                value: {
                  name: 'Angela Yaneth',
                  avatar: 'https://avatars.githubusercontent.com/u/159198880?v=4'
                }
              }
            ]
          },
          {
            order:'Instalar node',
            items:[
              {
                key: 'price',
                value: 152
              },
              {
                key: 'time',
                value: 152
              },
              {
                key: 'author',
                value: {
                  name: 'Angela Yaneth',
                  avatar: 'https://avatars.githubusercontent.com/u/159198880?v=4'
                }
              }
            ]
          }
        ]
      },
      {
        label: 'trabajando',
        color: 'green',
        list:[
          {
            order:'Hola Mundo',
            items:[
              {
                key: 'price',
                value: 152
              },
              {
                key: 'time',
                value: 152
              },
              {
                key: 'author',
                value: {
                  name: 'Angela Yaneth',
                  avatar: 'https://avatars.githubusercontent.com/u/159198880?v=4'
                }
              }
            ]
          }
        ]
      },
      {
        label: 'Realizadas',
        color: 'blue',
        list:[
          {
            order:'Hola Mundo',
            items:[
              {
                key: 'price',
                value: 152
              },
              {
                key: 'time',
                value: 152
              },
              {
                key: 'author',
                value: {
                  name: 'Angela Yaneth',
                  avatar: 'https://avatars.githubusercontent.com/u/159198880?v=4'
                }
              }
            ]
          }
        ]
      },
      

    ]
  }

  ngOnDestroy(): void {
    this.listObservable$.forEach((subscriptions)=> subscriptions.unsubscribe())
  }
}
