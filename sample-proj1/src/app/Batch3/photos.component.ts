import { PhotosService } from './photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-photos',
    template: `  <h4> list of photos</h4>
                    <table>
                    <tr *ngFor="let photo of photos">
                    <td>{{photo.id}} </td> <br>
                    <td><img [src]= "photo.thumbnailUrl" /></td> <br>
                    <td>{{photo.title}}</td>
                    </tr> </table>`,
    // styleUrls: ['./name.component.scss'],
    providers: [PhotosService]
})
export class PhotosComponent implements OnInit {

    photos: any;        //later replace with array of photos

    constructor(private photosService: PhotosService) { 
        //make the ajax calls

    }

    ngOnInit(): void {
        //recommended to make service calls here instead of const bcoz ngoninit is called after const
        //and use of const should be to initialize class var. 
        //cancel any request by unsubscribing
        
        this.photosService.getPhotos().subscribe(photolist =>{
            this.photos  = photolist;
        })
     }
}
