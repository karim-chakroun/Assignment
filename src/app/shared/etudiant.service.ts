import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http : HttpClient,
    ) { }

  readonly BaseURI = 'http://localhost:3000';

    getDepartments(){
      return this.http.get(this.BaseURI + '/etudiants');
  
    }
}
