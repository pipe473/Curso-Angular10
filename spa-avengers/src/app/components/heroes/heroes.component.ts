import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  // mostrar = true;

  constructor(private _heroesService: HeroesService) {
    console.log('constructor');
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }
}
