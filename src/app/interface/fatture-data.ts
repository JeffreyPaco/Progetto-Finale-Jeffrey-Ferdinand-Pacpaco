import { Fatture } from "../classes/fatture";

export interface FattureData {
content:Array<Fatture>;
first: boolean;
last: boolean;
number: number;
numberOfElements: number;
}

