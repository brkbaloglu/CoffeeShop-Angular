import { Component } from '@angular/core';
import { BlogServiceService } from 'src/app/services/blog-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  blogitems:any;

  constructor(private service:BlogServiceService){}


  ngOnInit():void{
    this.blogitems = this.service.blogitems;
  }
}
