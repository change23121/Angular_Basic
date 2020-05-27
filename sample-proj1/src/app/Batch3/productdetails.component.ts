import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-productDetails',
    template: `<p> Product Details for {{productId}}</p> `
})
export class ProductDetailsComponent implements OnInit {
    productId: number;
    constructor(private activeRoute: ActivatedRoute) { }

    ngOnInit(): void {
        //fetch the details of product id from root
        //load details for this product id
        //route parameters are available as Observable

        this.activeRoute.params.subscribe(parameter =>
            {this.productId = parseInt(parameter['id']);
        })
     }
}
