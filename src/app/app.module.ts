import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RegisterComponent } from './register/register.component';
import { ExploreComponent } from './explore/explore.component';

//Servicios
import { LoginService } from './Services/login.service';
import { MenuComponent } from './menu/menu.component';
import { ExploreService } from './Services/explore.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioComponent,
    RegisterComponent,
    MenuComponent,
    ExploreComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    ExploreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
