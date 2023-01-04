import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common'
import { DepartementModule } from './departement/departement.module';
import { ClassesModule } from './classes/classes.module';
import { EtudiantsModule } from './etudiants/etudiants.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    CommonModule,
    DepartementModule,
    ClassesModule,
    EtudiantsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
