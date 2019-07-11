import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas
import { APP_ROUTING } from './app.routes';


//SErvicios
import { HeroresService } from './services/heroes.service';




//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { AcercaComponent } from './components/acerca/acerca.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcercaComponent,
    HeroesComponent,
    HomeComponent,
    HeroeComponent,
    BusquedaComponent,
    HeroeTarjetaComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroresService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
