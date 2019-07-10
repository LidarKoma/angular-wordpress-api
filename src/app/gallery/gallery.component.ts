import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions } from 'ngx-gallery';
import { NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
    galleryImages:  NgxGalleryImage[]=[];
    myarrat:any[];
    my={}
    gallery: NgxGalleryImage[];
    galleryOpt: NgxGalleryOptions[];

    //images$: Observable<any[]>;
    imageLength:number;
    image:boolean;
    youtubeUrl:any;
    images$: any = {};

  constructor() {


    this.galleryImages = [
      {
          small: 'assets/image1.jpg',
          medium: 'assets/image1.jpg',
          big: 'assets/image1.jpg'
      },
      {
          small: 'assets/image1.jpg',
          medium: 'assets/image1.jpg',
          big: 'assets/image2.jpg'
      },
      {
          small: 'assets/image1.jpg',
          medium: 'assets/image1.jpg',
          big: 'assets/image1.jpg'
      }
  ];


    



      
 
        this.galleryOptions = [

          {"previewCloseOnClick":true, "imageDescription": true,"imageAutoPlay": true, "imageAutoPlayPauseOnHover": true, "previewAutoPlay": true, "previewAutoPlayPauseOnHover": true },
{ "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
{ "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
            
        ];

        //this.galleryImages=JSON.stringify(this.myarrat);

        this.galleryOpt = [

          { "imageDescription": true,"imageAutoPlay": true, "imageAutoPlayPauseOnHover": true, "previewAutoPlay": true, "previewAutoPlayPauseOnHover": true },
{ "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
{ "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
            
        ];


       
       
      
    
   }

  ngOnInit() {
  }

}
