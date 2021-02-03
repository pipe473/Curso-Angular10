import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noBedoya( control: FormControl): {[s:string]: boolean}{

    if ( control.value?.toLowerCase() === 'bedoya' ) {
      
      return {
        noBedoya: true
      }
    }
    return null;
  }
}
