import { Component } from '@angular/core';
import { ReviewServiceService } from 'src/app/services/review-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent {
  constructor(private service:ReviewServiceService){}

  reviewitems:any;
  ngOnInit():void{
    this.reviewitems = this.service.teamItems
  }
}
