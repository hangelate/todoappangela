import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(){

    const element = this.elHost.nativeElement;
    element.src = 'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png';

    console.log('Algo sucedio');
  }

  constructor(private elHost:ElementRef) { }

}
