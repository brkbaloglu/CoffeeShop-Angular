import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  constructor() { }

  storeItems=[
    {
      id:1,
      location:"Fevziçakmak, Muttalip Cd. Tepebaşı/Eskişehir",
    },
    {
      id:2,
      location:"Şarhöyük, Gazi Yakup Satar Cd., Tepebaşı/Eskişehir",

    },
    {
      id:3,
      location:"Şarhöyük, Hatboyu-2 Cd., Tepebaşı/Eskişehir",

    },
  ];
}
