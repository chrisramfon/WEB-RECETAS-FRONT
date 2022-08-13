import { Component, OnInit } from '@angular/core';
import { VerRecetaService } from '../Services/ver-receta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-formulario',
  templateUrl: './edit-formulario.component.html',
  styleUrls: ['./edit-formulario.component.css']
})
export class EditFormularioComponent implements OnInit {

  Res = {id: this.Aroute.snapshot.paramMap.get('id'), Titulo: "", Texto: "", Ingredientes: "", Likes: "", Fecha: "", Costo: "", Tipo_de_cocina: "", Lugar: "", Tiempo: "", Dificultad: "", Porciones: "", Usuario: "", Token: ""}
  
  constructor(private receta: VerRecetaService, private Aroute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.getReceta()
  }

  getReceta(){
    this.receta.getReceta(this.Res).subscribe(
      res => {
        this.Res = res
        this.Res.Token = localStorage.getItem('Token')
      }, err => {console.log(err)})
  }

  editarReceta(){
    this.receta.editarReceta(this.Res).subscribe(
      res => {
        alert('Datos almacenados.')
        this.router.navigate([`ver-receta/${this.Res.id}`])
      }, err => {console.log(err)})
  }
}
/*

*/