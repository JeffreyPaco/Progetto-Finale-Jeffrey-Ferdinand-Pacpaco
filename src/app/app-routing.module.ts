import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiDettaglioComponent } from './clienti-dettaglio/clienti-dettaglio.component';
import { ClientiTableComponent } from './clienti-table/clienti-table.component';
import { FattureComponent } from './fatture/fatture.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { UpdateClientiComponent } from './update-clienti/update-clienti.component';

const routes: Routes = [
  {path: '' , component: HomepageComponent},
  {path: 'clienti' , component: ClientiTableComponent},
  {path: 'clienti/:id', component: ClientiDettaglioComponent},
  {path: 'update/:id', component: UpdateClientiComponent}, 
  {path: 'fatture', component: FattureComponent},
  {path: 'new', component: NewClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
