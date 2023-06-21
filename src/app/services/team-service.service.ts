import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor() { }

  teamItems=[
    {
      id:1,
      name:"Ralph P. White",
      phone: "786-276-8888",
      age: "34",
      country:"USA",
      img:"../../../assets/img/ben-white-_YQgJos0SKE-unsplash.jpg",
    },
    {
      id:2,
      name:"Christine M. Forrester",
      phone: "231-792-4384",
      age: "32",
      country:"USA",
      img:"../../../assets/img/brooke-cagle-9fHMo1-5Io8-unsplash.jpg",
    },
    {
      id:3,
      name:"Chelsea Humphreys",
      phone: "501-499-9309",
      age: "42",
      country:"England",
      img:"../../../assets/img/Ekran görüntüsü 2023-06-21 013314.png",
    },
  ];

}
