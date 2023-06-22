import { Component, Input, OnInit } from '@angular/core';
import { Radnik, RadnikService } from '../radnik.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from './custom.Validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-radnik',
  templateUrl: './add-radnik.component.html',
  styleUrls: ['./add-radnik.component.css']
})
export class AddRadnikComponent implements OnInit{

constructor(private radServ:RadnikService,private router:Router)
{

}
  ngOnInit(): void {
   this.radServ.getPosao().subscribe(
    res=>{this.poslovi=res
    console.log(res)
    }
   )
  }

posao:any

poslovi:any

@Input() item?:number;





form=new FormGroup(
{
  ime:new FormControl('',[Validators.required,customValidators.proveriA]),
  prezime:new FormControl('',[Validators.required,Validators.minLength(3)]),
  lozinka:new FormControl('',[customValidators.proveriBroj,customValidators.proveriBrojNula]),
  idPosla:new FormControl('',[])
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

AddRadnik()
{



 const radnik:Radnik={
    id:0,
    ime:this.Ime?.value!,
    prezime:this.Prezime?.value!,
    lozinka:this.Lozinka?.value!,
    idPosla:+this.form.get("idPosla")?.value!
  }
this.radServ.addRadnik(radnik).subscribe(
  res=>{console.log(radnik)}
);


(document.getElementById("ime") as HTMLInputElement).value="";
(document.getElementById("prezime") as HTMLInputElement).value="";
(document.getElementById("lozinka") as HTMLInputElement).value="";

//this.router.navigate(["getRadnike"],{queryParams:{page:20}})

}
text?:string
onEmit(val:any)
{
this.text=val
  
}

}
