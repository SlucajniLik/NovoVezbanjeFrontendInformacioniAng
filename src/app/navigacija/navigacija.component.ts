import { Component } from '@angular/core';
import { RadnikService } from '../radnik.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.css']
})
export class NavigacijaComponent {
isLogedIn:any
constructor(private radServ:RadnikService,private route:Router)
{}


isLoged()
{
const token=localStorage.getItem("token")

if(token)
{
  return true
}

return null;



}

logout()
{


  localStorage.removeItem("token")

  this.route.navigate(["login"])
}









}
