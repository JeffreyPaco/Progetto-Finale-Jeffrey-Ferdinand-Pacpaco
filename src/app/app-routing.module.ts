import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiDettaglioComponent } from './clienti-dettaglio/clienti-dettaglio.component';
import { ClientiTableComponent } from './clienti-table/clienti-table.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '' , component: HomepageComponent},
  {path: 'clienti' , component: ClientiTableComponent},
  {path: 'clienti/:id', component: ClientiDettaglioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
