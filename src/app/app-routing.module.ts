import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ModifyComponent } from './components/modify/modify.component';

const routes: Routes = [
  { path: '', component: ListComponent },  // Ensure ListComponent loads by default
  { path: 'modify', component: ModifyComponent },
  { path: 'modify/:id', component: ModifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
