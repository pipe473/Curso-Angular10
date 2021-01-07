import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify service listo');    
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD4b9RhT9AxlXgCUF_HYFNZKHWLHLMLSRGTf91sNMGob0TK3Q_06rGMSSJiFLmTA3cdHVI0kUiXlICMVuU'
    });

    return this.http.get('	https://api.spotify.com/v1/browse/new-releases?limit=21', { headers } );
  }
}
