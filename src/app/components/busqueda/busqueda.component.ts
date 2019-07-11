import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroresService } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent {

  private heroes:any[]=[];
  private termino:string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroresService
    
    
    ) { 
      this.activatedRoute.params.subscribe(params=>{
        this.heroes = this._heroesService.buscarHeroes(params['termino']);
        this.termino = params['termino'];
      });




  }

  

}
