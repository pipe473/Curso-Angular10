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
      'Authorization': 'Bearer BQCpYsJ5tkSHcbwp_4-IBpIuTiQg2P5wo3ToZkRpqZ-T0Y2N5Pq-4Ird1NIW5NxFdZNTSgFsqJa2W4q1yIU'
    });

    this.http.get('	https://api.spotify.com/v1/browse/new-releases?limit=20', { headers }).subscribe( data => {
      console.log(data);      
    });
  }
}
