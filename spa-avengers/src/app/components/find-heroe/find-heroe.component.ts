import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-find-heroe',
  templateUrl: './find-heroe.component.html'
})
export class FindHeroeComponent implements OnInit {

  heroes:any[] = [];
  termino: string;

  constructor(
      private _activatedRoute: ActivatedRoute,
      private _router: Router,
      private _heroesService: HeroesService 
        ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];   
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);         
    })
  }

  homeHeroes(){
    this._router.navigate( [ '/heroes' ] );  
  }

}
