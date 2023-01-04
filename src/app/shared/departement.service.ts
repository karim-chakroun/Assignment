import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http : HttpClient,
    ) { }

    readonly BaseURI = 'http://localhost:3000';

    getDepartments(){
      return this.http.get(this.BaseURI + '/departements');
  
    }

    getDepartmentById(id:number){
      return this.http.get(this.BaseURI + '/departements/'+id);
    }
}
