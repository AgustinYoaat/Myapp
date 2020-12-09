import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {

    mostrar_texto= false

    password="12345"
    validar= [];

  constructor() { }

  ngOnInit() {
  }

}
