import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { CourComponent } from './cour/cour.component';

const routes: Routes = [
  {path:'',component:CoursComponent},
  {path:'cour/:id',component:CourComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
