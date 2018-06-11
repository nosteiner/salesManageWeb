import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', component: DogsComponent},
  // { path: 'add-dog', component: AddDogComponent },
  // { path: 'edit-dog/:id', component: EditDogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
