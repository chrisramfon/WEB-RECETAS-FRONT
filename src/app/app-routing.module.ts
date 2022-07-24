import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentess
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
//componentes

//import { RegisterComponent } from './Register/Register.component';
const routes: Routes = [
  {path:'',redirectTo:'welcome', pathMatch:'full'}, //siempre que inice es a welcome
  {path:'login', component:LoginComponent},
  {path:'formulario', component:FormularioComponent},
  {path:'register', component:RegisterComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'profile', component:ProfileComponent},


  //Rutas por defecto, dejar al final


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
