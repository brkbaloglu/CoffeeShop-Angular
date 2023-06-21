import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor() { }

  blogitems=[
    {
      id:1,
      blogimg:"../../../assets/img/1.jpg",
      blogheading:"Heading 1",
      blogsubject:"Subject 1",
      blogcontent:"Content 1",
      publisheddate:"21-06-2023",
    },
    {
      id:2,
      blogimg:"../../../assets/img/7.jpg",
      blogheading:"Heading 2",
      blogsubject:"Subject 2",
      blogcontent:"Content 2",
      publisheddate:"21-06-2023",
    },
    {
      id:3,
      blogimg:"../../../assets/img/8.jpg",
      blogheading:"Heading 3",
      blogsubject:"Subject 3",
      blogcontent:"Content 3",
      publisheddate:"21-06-2023",
    },
    {
      id:4,
      blogimg:"../../../assets/img/10.jpg",
      blogheading:"Heading 4",
      blogsubject:"Subject 4",
      blogcontent:"Content 4",
      publisheddate:"21-06-2023",
    },
    {
      id:5,
      blogimg:"../../../assets/img/14.jpg",
      blogheading:"Heading 5",
      blogsubject:"Subject 5",
      blogcontent:"Content 5",
      publisheddate:"21-06-2023",
    },
  ];
}
