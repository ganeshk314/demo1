import { Directive,ElementRef } from '@angular/core';
@Directive({
  selector: '[appManasa]'
})
export class ManasaDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor='red';
   }

}
