import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseComponent } from './classes/classe/classe.component';
import { DepartementsComponent } from './departement/departements/departements.component';

const routes: Routes = [
  {path:"", redirectTo:"departements", pathMatch:"full"},
  {path:"departements", component:DepartementsComponent},
  {path:"classes", component:ClasseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
