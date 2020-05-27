import { LoginService } from './login.service';
import { Component, OnInit } from "@angular/core";

@Component({

    selector: 'app-header',
    template: `<h2>Welcome inside header {{username}} </h2>`,
    // providers: [LoginService]
    //we want same instance so we are using providers in app i.e parent
})

export class HeaderComponent implements OnInit{

    username: string;

    constructor(loginService : LoginService){

        //observer has to subscribe to the subject
        loginService.getUserName().subscribe(newname=>{
            //using lambda function
            //when the username changes this method will get invoked

            this.username=newname;
        })
    }
    ngOnInit(): void {
    }
    
}