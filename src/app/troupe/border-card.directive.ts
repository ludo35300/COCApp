import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[trpBorderCard]',
  standalone: true
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
  }

  @Input('trpBorderCard') borderColor!: string; // alias

  // Change la couleur lors du survol
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }
  // Change la couleur lorsqu'on quitte
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

 

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}