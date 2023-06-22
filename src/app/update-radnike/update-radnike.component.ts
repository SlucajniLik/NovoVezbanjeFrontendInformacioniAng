import { Component } from '@angular/core';
import { Radnik, RadnikService } from '../radnik.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-radnike',
  templateUrl: './update-radnike.component.html',
  styleUrls: ['./update-radnike.component.css']
})
export class UpdateRadnikeComponent {


  constructor(private radServ:RadnikService,private actRoute:ActivatedRoute)
  {
  
  }
  
  
  
  form=new FormGroup(
  {
    ime:new FormControl('',[]),
    prezime:new FormControl('',[]),
    lozinka:new FormControl('',[]),
  }
  )
  
  
  get Ime()
  {
  
    return this.form.get("ime")
  }
  
  
  get Prezime()
  {
  
    return this.form.get("prezime")
  }
  
  
  get Lozinka()
  {
  
    return this.form.get("lozinka")
  }
  
  UpdateRadnik()
  {
  
  
  
    const radnik:Radnik={
      id:0,
      ime:this.Ime?.value!,
      prezime:this.Prezime?.value!,
      lozinka:this.Lozinka?.value!
    }
console.log(radnik.lozinka)
  const id=this.actRoute.snapshot.paramMap.get("id")
  this.radServ.updateRadnik(+id!,radnik).subscribe(
    (res:any)=>{console.log(radnik)}
  );
  
  
  (document.getElementById("ime") as HTMLInputElement).value="";
  (document.getElementById("prezime") as HTMLInputElement).value="";
  (document.getElementById("lozinka") as HTMLInputElement).value="";
  
  
  
  }
  








}
