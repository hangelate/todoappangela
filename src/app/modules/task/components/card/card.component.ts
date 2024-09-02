import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit, AfterViewInit, AfterViewChecked, DoCheck, OnChanges {
  @ViewChild('refId') elementRefId : ElementRef = new ElementRef('')
  @Input() idOrder: string | number = 0
  @Input() items: Array<any>=[]

  constructor(private render2:Renderer2) { }
  

  ngOnInit(): void {
    // interval(1000).subscribe(() => {
    //   this.idOrder = Date.now()
    // })
  }

  ngAfterViewInit(): void {
    const elementTitle = this.elementRefId.nativeElement;
    this.render2.setStyle(elementTitle,'color','red')
    // console.log('Hola, aqui estoy', this.elementRefId)
  }

  ngAfterViewChecked(): void {

    console.log('Hola mundo')
  }

  ngDoCheck(): void {
    console.log('Hola soy el do check')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
