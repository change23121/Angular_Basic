import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contacts',
    template: `<p> Contact: 
                <br> 
                Email id -- abc@gmail.com 
                <!-- <br> Phone no -- {{this.phoneNo| phone}}  </p>
                I don't know why pipe is not working -->
                <br>Phone no -- {{this.phoneNo}}`
    // styleUrls: ['./name.component.scss']
})
export class ContactsComponent implements OnInit {
    phoneNo: string;
    constructor() {
        this.phoneNo = '6775434233131';
     }

    ngOnInit(): void { }
}
