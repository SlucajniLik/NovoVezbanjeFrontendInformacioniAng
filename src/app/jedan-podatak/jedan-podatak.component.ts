import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-jedan-podatak',
  templateUrl: './jedan-podatak.component.html',
  styleUrls: ['./jedan-podatak.component.css']
})
export class JedanPodatakComponent {
  @Input() item?:string;
  @Output() promeni=new EventEmitter
  
  

SendEmit()
{
  this.promeni.emit(this.item+" je emitovan")


}
 
}
