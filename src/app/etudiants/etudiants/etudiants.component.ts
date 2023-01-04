import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClasseService } from 'src/app/shared/classe.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private service:ClasseService) { }

  classeId:number=0;
  classe:any;

  ngOnInit(): void {
    this.classeId=this.data.classeId;
    this.getClasseById();
  }
  getClasseById(){
    this.service.getclassById(this.data.classeId).subscribe(
      res =>{
        console.log(res)
        this.classe = res;
      },
      err =>{
        console.log(err);
      }   
    );
  }

}
