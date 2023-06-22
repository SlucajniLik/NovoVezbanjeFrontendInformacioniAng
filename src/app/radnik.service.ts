import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadnikService {

  constructor(private http:HttpClient) { }
url="https://localhost:7153/"
addRadnik(radnik:any)
{
return this.http.post(this.url+"addRadnik",radnik)
}


updateRadnik(id:number,radnik:any)
{
return this.http.put(this.url+"updateRadnik/"+id,radnik)
}


getRadnik(id:number)
{
return this.http.get(this.url+"getRadnik/"+id)
}



getRadnike()
{
return this.http.get(this.url+"getRadnike")
}



deleteRadnike(id:number)
{
return this.http.delete(this.url+"deleteRadnik/"+id)
}




getPosao()
{
return this.http.get(this.url+"getPosao")
}




getRadnikPosao()
{
return this.http.get(this.url+"getRadnikPosao")
}



checkUsers(obj:any)
{


  
return this.http.post(this.url+"login",obj)
}


login()
{
const token=localStorage.getItem("token")

if(token==null)
{
  return false
}

return true;



}

logout()
{


  localStorage.removeItem("token")
}

}


export interface Radnik 
{
  id:number,
  ime:string,
  prezime:string,
  lozinka:string,
  idPosla?:number

}



export interface RadnikPosao
{
 id:number,
  ime:string,
  prezime:string,
  lozinka:string,
  naziv:string

}



export interface loginn 
{
 
  ime:string

}