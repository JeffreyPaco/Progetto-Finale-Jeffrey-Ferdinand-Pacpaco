import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {

  clienti: Clienti = new Clienti();
  tipoCliente : string[] = [];
  
  constructor(
    private clientiService: ClientiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clientiService.getTipoClienti().subscribe(data => 
    this.tipoCliente = data
      );
  }

  new() {
    this.clientiService.createClienti(this.clienti).subscribe(clienti => this.clienti = clienti);
    this.router.navigate(['clienti']);
  }
}
