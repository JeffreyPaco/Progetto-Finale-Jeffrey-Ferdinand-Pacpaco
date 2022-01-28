import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-update-clienti',
  templateUrl: './update-clienti.component.html',
  styleUrls: ['./update-clienti.component.css']
})
export class UpdateClientiComponent implements OnInit {

  clienti: Clienti = new Clienti();

  constructor( private clientiService:ClientiService, 
    private route: ActivatedRoute,
    private router: Router) { }

ngOnInit(): void {
this.route.params.subscribe(params => {
this.clientiService.getClientiById(params['id']).subscribe(clienti =>{
this.clienti = clienti;})
})
}

update(){  
    this.clientiService.update(this.clienti).subscribe(clienti=>this.router.navigate(['clienti']))
    
}
}
