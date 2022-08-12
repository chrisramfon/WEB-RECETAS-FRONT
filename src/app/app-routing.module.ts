import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { FollowersComponent } from './followers/followers.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { ExploreComponent } from './explore/explore.component';
import { VerRecetaComponent } from './ver-receta/ver-receta.component';
import { HomeComponent } from './home/home.component';
import { VerFavoritosComponent } from './ver-favoritos/ver-favoritos.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { EditFormularioComponent } from './edit-formulario/edit-formulario.component';





const routes: Routes = [
  {path: '',redirectTo:'welcome', pathMatch:'full'}, //siempre que inice es a welcome
  {path: 'login', component:LoginComponent},
  {path: 'formulario', component:FormularioComponent},
  {path: 'comentarios', component:ComentariosComponent},
  {path: 'followers', component:FollowersComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'welcome', component:WelcomeComponent},
  {path: 'myprofile', component:ProfileComponent},
  {path: 'ver-receta/:id', component: VerRecetaComponent},
  {path: 'ver-perfil/:id', component: VerPerfilComponent},
  {path: 'explore', component:ExploreComponent},
  {path: 'home', component: HomeComponent},
  {path: 'editar-perfil', component: EditarPerfilComponent},
  {path: 'editar-receta', component: EditFormularioComponent},
  {path: 'ver-favoritos', component: VerFavoritosComponent},
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', redirectTo:'inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
