//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'busqueda/:termino', component: BusquedaComponent },
    { path: '**', pathMatch:'full', redirectTo:'home' }
];

// @NgModule({
//     imports: [CommonModule, RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class HeroeComponentdule {}
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
