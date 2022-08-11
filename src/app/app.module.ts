import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { VerRecetaComponent } from './ver-receta/ver-receta.component';
import { VerFavoritosComponent } from './ver-favoritos/ver-favoritos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { FollowersComponent } from './followers/followers.component';
import { EditFormularioComponent } from './edit-formulario/edit-formulario.component';


//Servicios
import { LoginService } from './Services/login.service';
import { UsuarioService } from './Services/usuario.service';
import { ExploreService } from './Services/explore.service';
import { VerRecetaService } from './Services/ver-receta.service';
import { VerFavoritosService } from './Services/ver-favoritos.service';
import { PerfilService } from './Services/perfil.service';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { SigninService } from './Services/signin.service';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioComponent,
    RegisterComponent,
    MenuComponent,
    WelcomeComponent,
    ProfileComponent,
    ComentariosComponent,
    FollowersComponent,
    ExploreComponent,
    VerRecetaComponent,
    HomeComponent,
    VerFavoritosComponent,
    VerPerfilComponent,
    EditarPerfilComponent,
    EditFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    LoginService,
    UsuarioService,
    ExploreService,
    VerRecetaService,
    VerFavoritosService,
    PerfilService,
    SigninService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
