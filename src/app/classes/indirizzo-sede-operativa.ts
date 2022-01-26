import { Comune } from "./comune";
import { Provincia } from "./provincia";

export class IndirizzoSedeOperativa {
    id!:number;
    via!:string;
    civico!:string;
    cap!:string;
    località!:string;
    comune!:Comune;
    provincia!:Provincia
}
