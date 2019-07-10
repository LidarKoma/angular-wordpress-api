import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../wordpress.service';
import { NgxGalleryOptions } from 'ngx-gallery';
import { NgxGalleryImage } from 'ngx-gallery';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  private _albums: Array<any> = [];

  //post$: any = {};
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[]=[];
  post$:  Array<any>;
  image:boolean;
  youtubeUrl:any;
  

  constructor(private _lightbox: Lightbox,private _sanitizer: DomSanitizer,private router: Router, private route: ActivatedRoute,private wp: WordpressService,private wowService: NgwWowService) {
    this.wowService.init();
    for (let i = 1; i <= 10; i++) {
      const src = 'assets/img/image' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/img/image' + i + '-thumb.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._albums.push(album);
    }
   }

  ngOnInit() {
    window.scroll(0,0);

    //this.getPostlar(this.route.snapshot.params['id']);
    this.wp.getWorkD(this.route.snapshot.params['id']).subscribe( data => {
      //this.posts$  = data[0];
     
      this.post$  = data['data']['workdetials'];
      
      if(this.post$['image1']) {
      let small=this.post$['image1'];
      
        this.image=true;
      let medium=this.post$['image1m'];
      let big=this.post$['image1b'];

      let small2=this.post$['image2'];
      let medium2=this.post$['image2m'];
      let big2=this.post$['image2b'];

      let small3=this.post$['image3'];
      let medium3=this.post$['image3m'];
      let big3=this.post$['image3b'];
     this.galleryImages.push({'small':small,
  'medium':medium,
  'big':big})
  this.galleryImages.push({'small':small2,
  'medium':medium2,
  'big':big2})
  this.galleryImages.push({'small':small3,
  'medium':medium3,
  'big':big3})
 


      console.log("lklj" +this.post$)
      }
      else {
        let url:string=this.post$['video']
          this.youtubeUrl=this._sanitizer.bypassSecurityTrustResourceUrl(url);
       
      this.image=false;
      

    }
    }, error => this.router.navigate([""])

  );
  
 
  

    this.galleryOptions = [
      {
      width: '100%',
      height: '100',"previewCloseOnClick":true, "imageDescription": true,"imageAutoPlay": true, "imageAutoPlayPauseOnHover": true, "previewAutoPlay": true, "previewAutoPlayPauseOnHover": true },
{ "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
{ "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
        
    ];


  
  }



  getPostlar(id) {
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
   
}
