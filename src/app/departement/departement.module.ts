import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartementsComponent } from './departements/departements.component';

import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    DepartementsComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class DepartementModule { }
