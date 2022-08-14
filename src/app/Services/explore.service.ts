import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  private todasURL = "http://192.168.100.128:3000/receta"

  constructor(private http: HttpClient) { }

  getRecetas(){
    return this.http.get<any>(this.todasURL)
  }

}