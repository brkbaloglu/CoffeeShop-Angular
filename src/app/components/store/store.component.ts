import { Component } from '@angular/core';
import { StoreServiceService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  storeitems:any;

  constructor(private service:StoreServiceService){}

  ngOnInit():void{
    this.storeitems = this.service.storeItems;
  }
}
