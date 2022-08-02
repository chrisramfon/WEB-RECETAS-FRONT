import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { ExploreComponent } from './explore/explore.component';
import { VerRecetaComponent } from './ver-receta/ver-receta.component';
import { HomeComponent } from './home/home.component';
import { VerFavoritosComponent } from './ver-favoritos/ver-favoritos.component';




const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'formulario', component:FormularioComponent},
  {path:'register', component:RegisterComponent},
  {path: 'ver-receta/:id', component: VerRecetaComponent},
  {path: 'explore', component:ExploreComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ver-favoritos', component: VerFavoritosComponent},
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', redirectTo:'inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
