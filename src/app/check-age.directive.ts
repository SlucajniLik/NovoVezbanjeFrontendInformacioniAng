import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCheckAge]'
})
export class CheckAgeDirective  {
  @Input('appCheckAge') age!: number
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

 
  @HostListener('keyup.enter') onKeyUpEnter()
  {
    if (this.age > 18 && this.age < 40) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    }

    console.log(this.age+"xxx")
  }
}

