import { latestForRent } from "../../interface/property";

// WishList
export class addWishlistItem{
  static readonly type = '[wishlist] Add';
  constructor(public payload : latestForRent) {}
}

export class getWishlistData{
  static readonly type = '[wishlist] Get'
}

export class removeWishlistItem{
  static readonly type = '[wishlist] Delete';
  constructor(public id:number) {}
}
