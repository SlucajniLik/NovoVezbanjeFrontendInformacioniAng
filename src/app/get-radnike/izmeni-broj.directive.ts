import { Directive, ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[IzmeniBroj]'
})
export class IzmeniBrojDirective {

  constructor(private el:ElementRef) { }


  @HostListener('keyup.enter') onKeyUpEnter()
  {
  let value:string=this.el.nativeElement.value
  
  value=value.slice(1)

  let value2=value.slice(1,4)
 let value3 =value.slice(4,7)
this.el.nativeElement.value="+381/"+value2+"-"+value3


  }




}

