import { Component, OnInit, Inject  } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `<ul class="nav nav-pills">
                    <li *ngFor=" let item of menuItems; " role="presentation">
                    <a routerLink ="{{item | lowercase}}">{{item}}</a></li>
                    </ul>`
    // styleUrls: ['./name.component.scss']
})
export class MenuComponent implements OnInit {
    menuItems: string[];

    constructor() { 
        this.menuItems= ['Login', 'Photos', 'Products', 'Profile', 'SignUpForm', 'Contacts']
    }

    ngOnInit(): void { }
}
