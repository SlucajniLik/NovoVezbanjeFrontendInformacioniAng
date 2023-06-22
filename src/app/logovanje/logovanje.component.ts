import { Component } from '@angular/core';
import { RadnikService, loginn } from '../radnik.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logovanje',
  templateUrl: './logovanje.component.html',
  styleUrls: ['./logovanje.component.css']
})
export class LogovanjeComponent {

constructor(private radServ:RadnikService,private router:Router)
{
}
ime:any;
obj?:loginn
checkUser()
{


  this.obj={
ime:this.ime
}

this.radServ.checkUsers(this.obj).subscribe(
  (res:any)=>{
  if(!res.msg)
  {
    localStorage.setItem("token",res.lozinka)
  }
  else
  {console.log(res.msg)}
  
  
  }
)

this.router.navigate(["getRadnike"],{queryParams:{page:20}})

}








}
