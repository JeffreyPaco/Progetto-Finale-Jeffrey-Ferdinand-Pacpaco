import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clienti } from '../classes/clienti';
import { ClientiData } from '../interface/clienti-data';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  tenantID: "fe_0621" = "fe_0621";
  bearerToken: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEzNSwiZXhwIjoxNjQzOTA1MTM1fQ.hfzG2DqyWycdhGiBK_1ZMtw8ojRx3r-oWJlE94rT_q_9xJ7bftWX6xs5ePV9kWkM3QMyVeEvM5UdekiyjHNQGg" = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEzNSwiZXhwIjoxNjQzOTA1MTM1fQ.hfzG2DqyWycdhGiBK_1ZMtw8ojRx3r-oWJlE94rT_q_9xJ7bftWX6xs5ePV9kWkM3QMyVeEvM5UdekiyjHNQGg";
headers = new HttpHeaders();

  constructor(private http: HttpClient) { 
this.headers = this.headers
                     .set("Authorization", this.bearerToken)
                     .set("X-TENANT-ID", this.tenantID)
}

getAllClienti() {
  return this.http.get<ClientiData>(environment.clienti, {headers: this.headers})
}

getClientiById(id: number) {
  return this.http.get<Clienti>(environment.clientiId+id, {headers: this.headers})
}

update(clienti: Clienti) {

  return this.http.put<Clienti>(environment.clientiId+clienti.id, clienti,{headers: this.headers})
}

rimuoviClienti(clienti: Clienti) {
  return this.http.delete<Clienti>(environment.clientiId+clienti.id,{headers: this.headers})
}

getTipoClienti() {
  return this.http.get<string[]>(environment.tipocliente, {headers: this.headers})
}

createClienti(clienti: Clienti) {
  return this.http.post<Clienti>(environment.clienti, clienti,{headers: this.headers})
}
}
