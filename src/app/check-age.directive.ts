import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCheckAge]'
})
export class CheckAgeDirective {

  constructor(private elmRef: ElementRef) { }

  @HostListener('keyup') onKeyup() {
    if (this.elmRef.nativeElement.value < 13 || this.elmRef.nativeElement.value > 19) {
      this.elmRef.nativeElement.style.background = 'red';
    } else {
      this.elmRef.nativeElement.style.background = 'green';
    }
  }

  @HostListener('mouseleave') onMouseleave() {
    this.elmRef.nativeElement.style.background = 'white';
  }
}
