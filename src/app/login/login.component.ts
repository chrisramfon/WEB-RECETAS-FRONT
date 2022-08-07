import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Usuario = {Usuario: "", Pass: ""}

  constructor(private router: Router, private Log: LoginService) { }

  ngOnInit(): void {
    this.validatoken()
  }

  login(){
    this.Log.postLogin(this.Usuario).subscribe(res=>{

      if(!res.Token) {alert(`${res.Mensaje}`); throw res.Mensaje}

      console.log(res)
      localStorage.setItem('Token', res.Token)
      alert(res.Mensaje)
      this.reload()
      this.router.navigate(['home'])
    }, err=>{
      console.log(err)
    })
  }  

  reload(){
    window.location.reload()
  }

  validatoken(){
    if(localStorage.getItem('Token').length > 0){
      this.router.navigate(['home'])
    }
  }

}
