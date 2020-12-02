import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  alumno="Juan"; 
  y=12;
  x=true;
variable=0;
variable2=0;
resultado=0;
  sumar()
   {
    
    this.resultado=this.variable+this.variable2; 
   }
   restar()
   {

    this.resultado=this.variable-this.variable2;
   }
   multiplicar()
   {
     this.resultado=this.variable*this.variable2;
   }

   dividir()
{
  this.resultado=this.variable/this.variable2;
}
  }
