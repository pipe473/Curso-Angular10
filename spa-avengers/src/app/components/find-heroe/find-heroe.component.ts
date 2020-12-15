import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-find-heroe',
  templateUrl: './find-heroe.component.html'
})
export class FindHeroeComponent implements OnInit {

  heroes:any[] = [];

  constructor(
      private _activatedRoute: ActivatedRoute,
      private _heroesService: HeroesService 
        ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      // console.log(params['termino']);   
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);         
    })
  }

}
