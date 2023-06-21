import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {

  constructor() { }

  teamItems=[
    {
      id:1,
      name:"Lechosław Wiśniewski",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem.",
      img:"../../../assets/img/pic-1.png"
    },
    {
      id:2,
      name:"Chan Juan Lei",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem.",
      img:"../../../assets/img/pic-2.png"

    },
    {
      id:3,
      name:"Hieronim Rutkowski",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem.",
      img:"../../../assets/img/pic-3.png"

    },
  ];
}
