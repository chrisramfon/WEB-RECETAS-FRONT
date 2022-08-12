import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecetasService } from '../Services/recetas.service';

@Component({
  selector: 'app-editformu',
  templateUrl: './editformu.component.html',
  styleUrls: ['./editformu.component.css']
})
export class EditformuComponent implements OnInit {

  Recetas = {Imagen: "", Token: (localStorage.getItem('Token')),Titulo:"", Texto:"", Costo:"", Cocina:"", Lugar:"", Tiempo:"", Dificultad:"",Porciones:""}

  constructor(private receta: RecetasService, private router:Router) { }

  ngOnInit(): void {

  }



}
