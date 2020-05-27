import { Component } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'app-signupform',
    templateUrl: './signupform.component.html',
    styles: [`
            input.ng-invalid{
                border-left: solid 8px red;
            }
            input.ng-valid{
                border-left: solid 8px green;
            }
            `]
})
export class SignUpFormComponent {
    // constructor() { }

    user: User ={
        name: 'James',
        phone:'1234',
        address: 'India'
    }
    // ngOnInit(): void { }

    postForm(){
        alert('Form posted');
        //Http post requested here 
    }
}
