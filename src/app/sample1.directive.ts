import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSample1]'
})
export class Sample1Directive {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.background = "green";
  }

}
