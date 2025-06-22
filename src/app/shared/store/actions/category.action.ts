import { areaFilter, priceFilter } from "../../interface/property";

// Category Filter
export class getCategory {
  static readonly type = '[category] Get';
  constructor(public tags: string[], public price: priceFilter, public area:areaFilter, public category : string[], public filterValue: string) {}
}



