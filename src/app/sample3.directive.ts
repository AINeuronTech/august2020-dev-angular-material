import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSample3]',
})
export class Sample3Directive {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.background = 'white';
  }

  @HostListener('keyup') onKeyup() {
    if (
      this.elementRef.nativeElement.value < 13 ||
      this.elementRef.nativeElement.value > 19
    ) {
      this.elementRef.nativeElement.style.background = 'red';
    } else {
      this.elementRef.nativeElement.style.background = 'green';
    }
  }
  @HostListener('mouseleave') onMouseleave() {
    this.elementRef.nativeElement.style.background = 'white';
  }
}
