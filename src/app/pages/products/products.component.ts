import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService:ProductsService) { }
  products :any =[]
  category : any ={
    name:  'Wake'
   }
  ngOnInit(): void {
    this.productsService.getProducts('products').subscribe((data :any )=>{
      console.log(data)
      this.products= data;
    })
   
  }

}
