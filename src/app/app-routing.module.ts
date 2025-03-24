import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProjectComponent } from './Component/project/project.component';

const routes: Routes = [
 {
  path:'',
  component:HomeComponent,
  pathMatch:'full'
 },
 {
  path:'project',
  component:ProjectComponent,
  pathMatch:'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
