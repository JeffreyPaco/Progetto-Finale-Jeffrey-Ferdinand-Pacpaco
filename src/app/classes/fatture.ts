import { Clienti } from "./clienti";
import { IndirizzoSedeLegale } from "./indirizzo-sede-legale";
import { IndirizzoSedeOperativa } from "./indirizzo-sede-operativa";
import { Stato } from "./stato";

export class Fatture {
    id!: number;
    data!: number;
    numero!: number;
    anno!: number;
    importo!: number;
    stato!:Stato;
    cliente!:Clienti;
    indirizzoSedeOperativa!:IndirizzoSedeOperativa;
    indirizzoSedeLegale!:IndirizzoSedeLegale;
    dataInserimento!: number;
    dataUltimoContatto!: number;
    fatturatoAnnuale!: null;
  content!: Fatture[]; 
}

