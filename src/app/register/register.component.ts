import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../Services/signin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
Datos = {Usuario: "", Pass: "", Nombre: "", Correo: ""}

  constructor(private signinS: SigninService, private router: Router) {}

  ngOnInit(): void {
  }

  signin(){
    if(this.Datos.Usuario == "" || this.Datos.Pass == "" || this.Datos.Nombre == "" || this.Datos.Correo == ""){
      alert('Faltan datos por ingresar.')
    }else{
      this.signinS.postSignin(this.Datos).subscribe(
        res =>{
          console.log(res)
          alert(`Usuario registrado con éxito.`)
          this.router.navigate(['login'])
        }, err => {console.log(err)})
    }
  }

}