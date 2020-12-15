import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  // mostrar = true;

  constructor(
        private _heroesService: HeroesService,
        private router: Router 
          ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }
  verHeroe(indexHeroe: number){
    this.router.navigate( [ '/heroe', indexHeroe ] );  
  }
}
