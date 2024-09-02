import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('refId') elementRefId : ElementRef = new ElementRef('')
  @Input() idOrder: string | number = 0
  @Input() items: Array<any>=[]

  constructor(private render2:Renderer2) { }
  

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.idOrder = Date.now()
    })
  }

  ngAfterViewInit(): void {
    const elementTitle = this.elementRefId.nativeElement;
    this.render2.setStyle(elementTitle,'color','red')
    // console.log('Hola, aqui estoy', this.elementRefId)
  }

  ngAfterViewChecked(): void {

    console.log('Hola mundo')
  }

}
