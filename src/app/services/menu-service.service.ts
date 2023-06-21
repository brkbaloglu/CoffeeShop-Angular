import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { }
  menuitems = [
    {
      id:1,
      itemName:"Caffé Americano",
      itemDetails:"Caffé Americano",
      itemPrice:210,
      itemImg:"../../../assets/img/caffé-americano.webp"
    },
    {
      id:2,
      itemName:"Caffé Latte",
      itemDetails:"Caffé Latte",
      itemPrice:205,
      itemImg:"../../../assets/img/caffé-latte.webp"
    },
    {
      id:3,
      itemName:"Caffé Misto",
      itemDetails:"Caffé Misto",
      itemPrice:215,
      itemImg:"../../../assets/img/caffé-misto.webp"
    },
    {
      id:4,
      itemName:"Cold brew Latte",
      itemDetails:"Cold brew Latte",
      itemPrice:205,
      itemImg:"../../../assets/img/cold-brew-latte.webp"
    },
    {
      id:5,
      itemName:"Cold brew ",
      itemDetails:"Cold brew ",
      itemPrice:205,
      itemImg:"../../../assets/img/cold-brew.webp"
    },
    {
      id:6,
      itemName:"Esspresso Macchiato",
      itemDetails:"Esspresso Macchiato",
      itemPrice:225,
      itemImg:"../../../assets/img/espresso-macchiato.webp"
    },
    {
      id:7,
      itemName:"Filtre Kahve",
      itemDetails:"Filtre Kahve",
      itemPrice:225,
      itemImg:"../../../assets/img/filtre-kahve.webp"
    },
    {
      id:7,
      itemName:"Iced Cappucino",
      itemDetails:"Iced Cappucino",
      itemPrice:225,
      itemImg:"../../../assets/img/iced-cappucino.webp"
    },
    {
      id:8,
      itemName:"Türk Kahvesi",
      itemDetails:"Türk Kahvesi",
      itemPrice:225,
      itemImg:"../../../assets/img/turk-kahves.webp"
    },
    {
      id:9,
      itemName:"White Chocolate Mocha",
      itemDetails:"White Chocolate Mocha",
      itemPrice:225,
      itemImg:"../../../assets/img/white-chocolate-mocha.webp"
    },
    
  ]
}
