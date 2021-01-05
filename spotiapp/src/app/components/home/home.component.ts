import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private http: HttpClient ) { 

    console.log('Constructor del home llamado');  
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( data => {
      console.log(data);      
    })

  }

  ngOnInit(): void {
  }

}
