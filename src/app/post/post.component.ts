import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WordpressService } from '../wordpress.service';
import { EventEmitter } from 'events';
import { NgxGalleryOptions } from 'ngx-gallery';
import { NgxGalleryImage } from 'ngx-gallery';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post$: any = {};
  //post$: Observable<any[]>;



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



  constructor(private _sanitizer: DomSanitizer,private router: Router, private route: ActivatedRoute,private wp: WordpressService) { 
    //this.getPost(this.route.snapshot.params['id']);
    this.getCar(this.route.snapshot.params['id']);

  }

 
  ngOnInit() {
    this.getCar(this.route.snapshot.params['id']);







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
    
    


  /* this.galleryImages = [
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
];*/


  



    

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
  //getPost(id) {
    //this.post$ = this.wp.getPost(id);

  //}

  getCar(id) {
    this.post$ = this.wp.getCar(id);
  }

}




