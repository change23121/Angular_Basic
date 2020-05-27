import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class LoginService {

    subj: Subject<string> = new Subject<string>();
    //defines RxJs subject

    setUserName(username: string):void{
        this.subj.next(username); //add the username to the stream
    }

    // observable is stream of values and here it is stream of string val
    getUserName( ):Observable <string>{
        return this.subj.asObservable() ;

    }
    

}