import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify service listo');    
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCdREo7arF438cuvbagCLRb313SiD8pprZlgEIuLauSk_5fl6nmvfLVZELZ7Dwmo9jKBt-9XTsK_1Clqpk'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=21')
          .pipe( map ( data => data['albums'].items ));      
  }

  getArtista( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
          .pipe( map (data =>  data['artists'].items ));      
  }
}
