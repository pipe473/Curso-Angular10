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
      'Authorization': 'Bearer BQCdREo7arF438cuvbagCLRb313SiD8pprZlgEIuLauSk_5fl6nmvfLVZELZ7Dwmo9jKBt-9XTsK_1Clqpk'
    });

    return this.http.get('	https://api.spotify.com/v1/browse/new-releases?limit=21', { headers } );
  }

  getArtista( termino: string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCdREo7arF438cuvbagCLRb313SiD8pprZlgEIuLauSk_5fl6nmvfLVZELZ7Dwmo9jKBt-9XTsK_1Clqpk'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers } );
  }
}
