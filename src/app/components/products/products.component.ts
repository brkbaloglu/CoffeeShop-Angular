import { Component } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productItems:any;

  constructor(private service:ProductsServiceService){}

  ngOnInit():void{
    this.productItems = this.service.productItems;
  }
}
