import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector : 'app-login',
    template : ` <h3> Login component</h3>
                <!-- keyup  will change the value of name as per the value entered by user in 
                password we are using 2 way data binding model to and from view
                 -->
                Enter username : <input type = "text" #input1 (keyup)="name=input1.value" 
                [value]="name" /> <br>
                Enter password : <input type ="password" #input2 [(ngModel)]="password" /> <br>
                <button (click) ="login()"> Login </button>
                <br> <br>
                Name in model: {{name}} and password {{password}}
                <br>
                Name in view : {{input1.value}} and password {{input2.value}}`,
// providers   : [LoginService]
// providers and useClass is same thus we can use shortcut i.e providers :[<serviceName>]    

})

export class LoginComponent implements OnInit
{
    // [value]= "name/password" is done to intitalize the var with values defined i. admin
    // i.e property binding taking val from class and populating it into view 
    name: string ='admin';
    password :string ="admin";

    constructor( private LoginService: LoginService, private router:Router)
    {
        // if you make any constructor parameter private then it will 
        // automatically add it as a reference variable and we can use loginservice 
        // anywhere in class , otherwise we had to create a local var then 
        // initailized to it in constructor


    }
    ngOnInit(){

    }
    login(): void{
        // invoke the service by setUserName()
        this.LoginService.setUserName(this.name);

        //after successful authentication (done by server)
        if(this.name=="admin")
        {
        this.router.navigate(['/products']);
        }
    }
}