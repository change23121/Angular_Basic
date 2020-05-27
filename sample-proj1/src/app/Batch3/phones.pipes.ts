//custom pipes

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'phone'
})

export class PhonePipe implements PipeTransform{
    transform(val: any,args:any) {
        // throw new Error("Method not implemented.");

        // val = val.charAt(0) != 0 ? '0' + val : ''+ val; 
        // let newstr='';
        // for(var i=0; i< (Math.floor(val.lenght/2) - 1 ); i++ )
        // {
        //     newstr += val.substr(i*2, 2) + '-';

        // }
        // return newstr + val.substr(i*2);
        return val+ 'hello';
    }
    
}