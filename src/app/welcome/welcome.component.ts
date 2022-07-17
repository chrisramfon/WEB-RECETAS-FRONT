import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
private router;
  ngOnInit(): void {
  }


  iniciar(){
    this.router.navigate(['/login'])
  }


  registrar(){
    this.router.navigate(['/register'])
  }


}
