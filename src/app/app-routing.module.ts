import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiDettaglioComponent } from './clienti-dettaglio/clienti-dettaglio.component';
import { ClientiTableComponent } from './clienti-table/clienti-table.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateClientiComponent } from './update-clienti/update-clienti.component';

const routes: Routes = [
  {path: '' , component: HomepageComponent},
  {path: 'clienti' , component: ClientiTableComponent},
  {path: 'clienti/:id', component: ClientiDettaglioComponent},
  {path: 'update/:id', component: UpdateClientiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
