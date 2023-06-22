import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddRadnikComponent } from './add-radnik/add-radnik.component';
import { GetRadnikeComponent } from './get-radnike/get-radnike.component';
import { UpdateRadnikeComponent } from './update-radnike/update-radnike.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { IzmeniBrojDirective } from './get-radnike/izmeni-broj.directive';
import { CustomPipe } from './custom.pipe';
import { JedanPodatakComponent } from './jedan-podatak/jedan-podatak.component';
import { LogovanjeComponent } from './logovanje/logovanje.component';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    AddRadnikComponent,
    GetRadnikeComponent,
    UpdateRadnikeComponent,
    NavigacijaComponent,
    IzmeniBrojDirective,
    CustomPipe,
    JedanPodatakComponent,
    LogovanjeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
     [
   {path:"addRadnik",component:AddRadnikComponent},
   {path:"getRadnike",component:GetRadnikeComponent,canActivate:[AuthGuard]},
   {path:"updateRadnik/:id",component:UpdateRadnikeComponent},
   {path:"login",component:LogovanjeComponent}
     ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
