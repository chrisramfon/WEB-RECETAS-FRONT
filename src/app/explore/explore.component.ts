import { Component, OnInit } from '@angular/core';
import { ExploreService } from '../Services/explore.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(private receta: ExploreService) { }
  filter = '';
  List

  ngOnInit(): void {
    this.getRecetas()
  }

  getRecetas(){
    this.receta.getRecetas().subscribe(res =>{
      this.List = res
    }, err=>{
      console.log(err)
    })
  }

}

