import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentess
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'formulario', component:FormularioComponent},
  {path: 'Registro', component: RegisterComponent},
  //Rutas por defecto, dejar al final
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', redirectTo:'inicio',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
