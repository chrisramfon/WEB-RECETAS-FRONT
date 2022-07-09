import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  passwordError: boolean;

  constructor() {}

  registrar() { //accion que toma el boton en el html //aqui tambien se declara el servicio
    const user = { email: this.email, password: this.password };

  }


  ngOnInit(): void {
  }



}
