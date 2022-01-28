import { Fatture } from "../classes/fatture";

export interface FatturaData {
content:Array<Fatture>;
first: boolean;
last: boolean;
number: number;
numberOfElements: number;
}
