import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged

  constructor() { }

  ngOnInit(): void {
    this.validaLog()
  }

  validaLog(){
    if(localStorage.getItem('Token').length <= 0){
      this.isLogged = false
    }else{
      this.isLogged = true
    }
  }

}
