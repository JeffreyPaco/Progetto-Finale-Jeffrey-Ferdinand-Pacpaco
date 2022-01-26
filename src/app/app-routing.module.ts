import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiTableComponent } from './clienti-table/clienti-table.component';

const routes: Routes = [
  {path: 'clienti' , component: ClientiTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
