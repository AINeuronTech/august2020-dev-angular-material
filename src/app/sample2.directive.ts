import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSample2]',
})
export class Sample2Directive {
  @Input() defaultColor;
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseover() {
    this.elementRef.nativeElement.style.background = 'blue';
  }

  @HostListener('mouseleave') onMouseleave() {
    this.elementRef.nativeElement.style.background = this.defaultColor;
  }
}
