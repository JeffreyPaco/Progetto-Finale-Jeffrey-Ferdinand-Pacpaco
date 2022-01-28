import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

  fatture: Fatture[] = []
  
  constructor(private service: FattureService,
    private router: Router) { }

  ngOnInit(): void {
  this.service.getAllFatture().subscribe(data=>this.fatture=data.content)
  }

}
