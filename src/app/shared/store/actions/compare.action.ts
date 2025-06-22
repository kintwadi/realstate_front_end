import { latestForRent } from '../../interface/property';

// Compare
export class getCompareData {
  static readonly type = '[compare] Get';
}

export class addCompareItem {
  static readonly type = '[compare] Add';
  constructor(public payload: latestForRent) {}
}

export class removeCompareItem {
  static readonly type = '[compare] Delete';
  constructor(public id: number) {}
}
