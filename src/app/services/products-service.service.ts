import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor() { }

  productItems = [
    {
      id:1,
      itemName:"Ethiopia",
      itemDetails:"Ethiopia",
      itemPrice:210,
      itemImg:"../../../assets/img/ethiopia.webp"
    },
    {
      id:2,
      itemName:"House Blend",
      itemDetails:"House Blend",
      itemPrice:210,
      itemImg:"../../../assets/img/house-blend.webp"
    },
    {
      id:3,
      itemName:"Kenya",
      itemDetails:"Kenya",
      itemPrice:210,
      itemImg:"../../../assets/img/kenya.webp"
    },
    {
      id:4,
      itemName:"Sumatra",
      itemDetails:"Sumatra",
      itemPrice:210,
      itemImg:"../../../assets/img/sumatra.webp"
    },
    {
      id:4,
      itemName:"Veranda Blend",
      itemDetails:"Veranda Blend",
      itemPrice:210,
      itemImg:"../../../assets/img/veranda-blend.webp"
    },
    
  ]
}
