import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { WordpressService } from '../wordpress.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Output } from '@angular/core';
import { EventEmitter } from 'events';






@Component({
  selector: 'app-gallery2',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.scss']
})
export class Gallery2Component implements OnInit {
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

    

    constructor(private _sanitizer: DomSanitizer,private router: Router, private route: ActivatedRoute,private wp: WordpressService,private _http: HttpClient) {
      //--
      /*
      //this.images$ = this.wp.getSlide();
      this.wp.getGallery().subscribe( data => {

        this.myarrat = data;
        this.myarrat.forEach(myarrat => {
      this.galleryImages.push({'small':myarrat['acf']['images']['sizes'].thumbnail,
      'medium':myarrat['acf']['images']['sizes'].medium,
      'big':myarrat['acf']['images']['sizes'].large})
          
          console.log("lkk" + JSON.stringify(this.galleryImages))

        });
        console.log("lkk" + JSON.parse(JSON.stringify(this.myarrat['dd'].f20)))
       
  });*/
      

      //this.images$ = this.wp.getSlide();
      
    }

 
    ngOnInit(): void {

      this.wp.getGallery2(this.route.snapshot.params['id']).subscribe( data => {

        //this.myarrat = data;
        //this.myarrat.forEach(myarrat => {
         this.imageLength= data['dd'].f2.length
          let $x:number = 0;
          if(this.imageLength>1) {
            this.image=true;
          while ($x<( data['dd'].f2).length){
          //console.log("length" +data['dd'].f2.length)
          

      this.galleryImages.push({'small':data['dd'].f2[$x],
      'medium':data['dd'].f2[$x],
      'big':data['dd'].f2[$x],'description':data['dd'].f3[$x]})
      
      $x++
          }
        }
          else {
            let url:string=data['dd'].url
            this.youtubeUrl=this._sanitizer.bypassSecurityTrustResourceUrl(url);
          this.image=false;
          

        }

       
        /*if(JSON.parse(JSON.stringify(this.myarrat['dd'].f20))==false)
       
        console.log("ooppps")
      else {
        this.gallery = [
          {
              small: JSON.parse(JSON.stringify(this.myarrat['dd'].f20)),
              medium: JSON.parse(JSON.stringify(this.myarrat['dd'].f20)),
              big: JSON.parse(JSON.stringify(this.myarrat['dd'].f20)),
              
          },
          {
              small: JSON.parse(JSON.stringify(this.myarrat['dd'].f21)),
              medium: JSON.parse(JSON.stringify(this.myarrat['dd'].f21)),
              big: JSON.parse(JSON.stringify(this.myarrat['dd'].f21))
          },
          {
              small: JSON.parse(JSON.stringify(this.myarrat['dd'].f22)),
              medium: JSON.parse(JSON.stringify(this.myarrat['dd'].f22)),
              big: JSON.parse(JSON.stringify(this.myarrat['dd'].f22))
          }
      ];
    }*/
      
      });
     this.images$=JSON.parse(JSON.stringify(this.galleryImages));
      
      


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
}
 