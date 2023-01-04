import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http : HttpClient,
    ) { }

  readonly BaseURI = 'http://localhost:3000';

    getClasses(){
      return this.http.get(this.BaseURI + '/classes/');
  
    }
    getclassById(id:number){
      return this.http.get(this.BaseURI + '/classes/'+id);
  
    }
}
