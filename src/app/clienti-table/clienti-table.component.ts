import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-clienti-table',
  templateUrl: './clienti-table.component.html',
  styleUrls: ['./clienti-table.component.css']
})
export class ClientiTableComponent implements OnInit {

  clienti:Clienti[]=[]

  constructor(
    private service:ClientiService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.service.getAllClienti().subscribe(data => this.clienti = data.content);
  }

  detail(item: Clienti): void {
  this.router.navigate(['clienti/'+ item.id]);
  }

  rimuovi(item: Clienti): void {
    this.service.rimuoviClienti(item).subscribe(data => {this.clienti = this.clienti.filter(ele => ele!== item)})
  }

  update(item:Clienti) {
    this.router.navigate(['update/'+ item.id]);
  }

  new(item: Clienti) {
    
  }
}
