import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../wordpress.service';
import { NgxGalleryOptions } from 'ngx-gallery';
import { NgxGalleryImage } from 'ngx-gallery';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-postlar',
  templateUrl: './postlar.component.html',
  styleUrls: ['./postlar.component.scss']
})
export class PostlarComponent implements OnInit {
  //post$: any = {};
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[]=[];
  post$:  Array<any>;
  image:boolean;
  youtubeUrl:any;

  constructor(private _sanitizer: DomSanitizer,private router: Router, private route: ActivatedRoute,private wp: WordpressService) { }

  ngOnInit() {
    //this.getPostlar(this.route.snapshot.params['id']);
    this.wp.getBook(this.route.snapshot.params['id']).subscribe( data => {
      //this.posts$  = data[0];
     
      this.post$  = data['data']['detials'];
      
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

      {"previewCloseOnClick":true, "imageDescription": true,"imageAutoPlay": true, "imageAutoPlayPauseOnHover": true, "previewAutoPlay": true, "previewAutoPlayPauseOnHover": true },
{ "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
{ "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
        
    ];


  
  }


  getPostlar(id) {
  }
   
}
