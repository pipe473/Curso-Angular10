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
      'Authorization': 'Bearer BQDH554XYJzOsboZD4EbV6CWFd4-H0SnoZyMyk8_tZSzy01KKceQ1IRc8ejUd_KZgpLgYxtwY1JuL45F1t4'
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
