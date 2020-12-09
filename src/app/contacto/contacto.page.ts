import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

nombre="";
contacto="";
asunto="";
mensage="";

enviar= [];

  constructor() { }

  ngOnInit() {
  }

}

