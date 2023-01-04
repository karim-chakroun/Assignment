import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EtudiantsComponent } from 'src/app/etudiants/etudiants/etudiants.component';
import { DepartementService } from 'src/app/shared/departement.service';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {
 

  constructor(private service : DepartementService,
    public dialog: MatDialog) { }

  departements:any;
  departement:any;

  ngOnInit(): void {
    this.getDepartements();
  }

  
  getDepartements(){
    this.service.getDepartments().subscribe(
      res =>{
        this.departements = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  getDepartementById(id:number){
    this.service.getDepartmentById(id).subscribe(
      res =>{
        this.departement = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  getEtudiantById(id:number){
    const dialogRef =  this.dialog.open(EtudiantsComponent, {
      width: '50%',
      height: '50%',
      data: { classeId: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  


}
