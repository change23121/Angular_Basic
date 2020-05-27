import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PhotosService {

    //injecting a service within another service
    constructor(private httpclient : HttpClient)
    {

    }

    getPhotos():Observable<any>{
        //make an http get req to typicode
        return this.httpclient.get('https://jsonplaceholder.typicode.com/photos');
    }
}