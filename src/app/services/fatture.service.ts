import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fatture } from '../classes/fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {
  tenantID ='fe_0621';
  bearerToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA5ODIyMSwiZXhwIjoxNjQzOTYyMjIxfQ.2SgF85Ps7IQmx9oUKnLtukvC3Sy44rWsUEDUEIkFS2_M-8qVKzMkWEZDQgvVAexUUhp7G_vdbpUx75w3dlFVpQ';
 
  headers= new HttpHeaders();
  constructor(private http:HttpClient) { 
    this.headers=this.headers 

     .set("Authorization", 'Bearer ' + this.bearerToken)
     .set("X-TENANT-ID", this.tenantID)
  }


  getAllFatture(){
    return this.http.get<Fatture>(environment.fatture,{headers:this.headers})
  }
}
