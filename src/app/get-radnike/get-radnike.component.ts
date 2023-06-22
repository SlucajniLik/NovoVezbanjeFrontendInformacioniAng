import { Component, OnInit } from '@angular/core';
import { Radnik, RadnikPosao, RadnikService } from '../radnik.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-radnike',
  templateUrl: './get-radnike.component.html',
  styleUrls: ['./get-radnike.component.css']
})
export class GetRadnikeComponent implements OnInit {

radnici?:any[]

  constructor(private radServ:RadnikService,private router:Router,private route:ActivatedRoute)
  {

  }

  filterData?:string="";
paramNum?:any
radnici2?:any[]
  ngOnInit(): void {
   
this.radServ.getRadnikPosao().subscribe(
  (res:any)=>{this.radnici=res
  this.radnici2=res
//this.radnici?.reverse()
/*this.radnici?.sort((a,b)=> {
  
  
  if(a.ime>b.ime)
  return -1
  if(a.ime<b.ime)
  return 1

  return 0

})*/
/*
this.radnici?.sort((a,b)=>{  if((a.id as number)>(b.id as number))
 
  return -1
  if((a.id as number)<(b.id as number))
  return 1

  return 0})*///ova ne rad


  this.radnici?.sort((a,b)=>{return (b.id-a.id)})
}






)


this.route.queryParamMap.subscribe(

  res=>{this.paramNum=res.get("page")??"1"}
)


  }


DeleteRadnik(id:number)
{

this.radServ.deleteRadnike(id).subscribe(
  res=>{console.log(res)}
)
const i=this.radnici?.findIndex(t=>t.id==id)

this.radnici?.splice(i!,1)

}
UpdateRadnik(id:number)
{

this.router.navigate(["updateRadnik/"+id])

}

FilterData()
{
  
 
if(this.filterData!.length>0)
{

  
this.radnici=
this.radnici2?.filter((x: { ime: string; naziv: string })=>

  (x.ime as string)
  .toLowerCase().includes(this.filterData!.toLowerCase())
 ||
 (x.naziv as string)
  .toLowerCase().includes(this.filterData!.toLowerCase())








)
console.log(this.radnici+"eeeee")
}
else
{
 
 this.radnici=this.radnici2

}

  

}
}