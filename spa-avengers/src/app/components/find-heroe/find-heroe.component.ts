import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-find-heroe',
  templateUrl: './find-heroe.component.html'
})
export class FindHeroeComponent implements OnInit {

  constructor(
      private _activatedRoute: ActivatedRoute,
      private _heroesService: HeroesService 
        ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      console.log(params['termino']);      
    })
  }

}
