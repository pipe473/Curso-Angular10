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
      'Authorization': 'Bearer BQBEfB09JpqsYSKTV2aJfW-eeZdUwHb6PtwByHeDzJ9p25eKjiev4nOTDx5nURIJq8HlxUIwKGEj-BrC7f4'
    });

    this.http.get('	https://api.spotify.com/v1/browse/new-releases?limit=20', { headers }).subscribe( data => {
      console.log(data);      
    });
  }
}
