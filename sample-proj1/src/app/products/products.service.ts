import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService
{
    imgPath:string;
    products: Array<Product>;
    isAdmin: boolean; 
    constructor()
    {
    let p1=new Product(1,"first",100);
    let p2=new Product(2,"second",200);
    let p3=new Product(3,"third",300);
    let p4=new Product(4,"fourth",400);

    this.products= new Array<Product>();
    this.products.push(p1);
    this.products.push(p2);
    this.products.push(p3);
    this.products.push(p4);

    this.imgPath="assets/nuclear.png";
    this.isAdmin=false;
    }

    getAllProducts():Array<Product>
    {
        return this.products;
    }

    getImgPath(): string{
        return this.imgPath;
    }

    getIsAdmin() : boolean{
        return this.isAdmin;
    }
}