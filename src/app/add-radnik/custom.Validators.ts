import { AbstractControl, ValidationErrors } from "@angular/forms";

export class customValidators
{




static proveriA(control:AbstractControl):ValidationErrors | null
{

if((control.value as string).includes("@"))
{
    return {ne:true}
}
return null



}





static proveriBroj(control:AbstractControl):ValidationErrors | null
{

   
  if(Number.isInteger(+(control.value as string)))
  {
return null
  }
  else
  {
    return {ne2:true}
  }
}





static proveriBrojNula(control:AbstractControl):ValidationErrors | null
{
  if((control.value as string).slice(0,1)=="0")
  {
return null
  }
  else
  {
    return {ne3:true}
  }
}



















}