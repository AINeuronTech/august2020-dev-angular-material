import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elmRef: ElementRef) { }

  ngOnInit() {
    this.elmRef.nativeElement.style.background = 'white';
  }

  @HostListener('mouseenter') onMouseenter() {
    this.elmRef.nativeElement.style.background = 'green';
  }

  @HostListener('mouseleave') onMouseleave() {
    this.elmRef.nativeElement.style.background = 'grey';
  }

}
