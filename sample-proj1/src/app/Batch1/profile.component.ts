import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

// parent to Child communication. parent--> app child--> profile 

@Component({
    selector: 'app-profile',
    template: `<h2> Profile name is {{profileName}}
                    <input type="text" [(ngModel)]="profileName">
                    <button (click)="updateName()" > Update </button>`
    // styleUrls: ['./name.component.scss']
})
export class ProfileComponent implements OnInit {
    
    @Input()
    profileName: string;    //this will be set by parent

    //custom event called as update
    @Output()               //send a value to parent
    update : EventEmitter <string> = new EventEmitter<string>();

    constructor() { }

    updateName():void{
        //emit a custom event of update
        this.update.emit(this.profileName);     //emit the new name to the parent
    }
    ngOnInit(): void { }
}
