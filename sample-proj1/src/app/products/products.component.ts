import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [{provide: ProductsService, useClass: ProductsService}]
})
export class ProductsComponent implements OnInit {
  imgPath:string;
  products: Array<Product>;
  isAdmin: boolean;
  constructor(ProductsService: ProductsService) {
    // fetch the data from product service 
    // productService is dependency of ProductsComponent
    // inject the dependency 
    // dependencies are always injected in const()

    this.products= ProductsService.getAllProducts();
    this.imgPath= ProductsService.getImgPath();
    this.isAdmin = ProductsService.getIsAdmin();
   }

  ngOnInit(): void {
  }

  remove(index:number):void{
    this.products.splice(index,1);
  }

  validate(name:string):void{
    {{name}};
  }
}
