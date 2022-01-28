import { IndirizzoSedeLegale } from "./indirizzo-sede-legale";
import { IndirizzoSedeOperativa } from "./indirizzo-sede-operativa";
import { TipoCliente } from "./tipo-cliente";

export class Clienti {
    id!: number;
    ragioneSociale!: string;
    partitaIva!: string;
    tipoCliente!:TipoCliente;
    email!: string;
    pec!:string;
    telefono!: number;
    nomeContatto!:string;
    cognomeContatto!:string;
    EmailContatto!:string;
    indirizzoSedeOperativa!:IndirizzoSedeOperativa;
    indirizzoSedeLegale!:IndirizzoSedeLegale;
    dataInserimento!: number;
    dataUltimoContatto!: number;
    fatturatoAnnuale!: number;   
}
