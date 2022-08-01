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
import { RegisterComponent } from './register/register.component';
import { ExploreComponent } from './explore/explore.component';
import { VerRecetaComponent } from './ver-receta/ver-receta.component';
import { VerFavoritosComponent } from './ver-favoritos/ver-favoritos.component';

//Servicios
import { LoginService } from './Services/login.service';
import { MenuComponent } from './menu/menu.component';
import { ExploreService } from './Services/explore.service';
import { VerRecetaService } from './Services/ver-receta.service';
import { HomeComponent } from './home/home.component';
import { VerFavoritosService } from './Services/ver-favoritos.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioComponent,
    RegisterComponent,
    MenuComponent,
    ExploreComponent,
    VerRecetaComponent,
    HomeComponent,
    VerFavoritosComponent
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
    ExploreService,
    VerRecetaService,
    VerFavoritosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
