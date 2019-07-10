import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../wordpress.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/internal/operators/delay';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit  {
  posts$: Observable<any[]>;
  //images$: Observable<any[]>;
  images$:  Array<any>;
  parentMessage = "message from parent"

  imag:any = [1, 2, 3].map(() => `https://picsum.photos/1500/500?random&t=${Math.random()}`);
images:any;
  constructor(private wp: WordpressService,private _http: HttpClient) {
    //this.images$ = this.wp.getSlide();

   // this.images$ = this.wp.getPosts();
   this.images=["https://picsum.photos/1500/500?random&t=0.5616589981961841",
   "https://picsum.photos/1500/500?random&t=0.49571968055928295",
   "https://picsum.photos/1500/500?random&t=0.796961447399086"]

    
  }
  ngOnInit() {
    //this.images$ = this.wp.getSlide();


    this.wp.getSlide().subscribe( data => {
      this.images$  = data;
      console.log("lklj" +this.images$)
    });
  }

  //ngOnInit() {
    //this.images$ = this.wp.getPosts();
    //console.log("lopo" + JSON.parse(JSON.stringify((this.images$))))

     /*this.wp.getSlide().subscribe(
      data => {
        this.images$=(data[0])
          console.log("PATCH Request is successful ",  this.images$[0]);
      },
      error => {
          console.log("Error", error);
      }
    )
    this.images$=this.images$[0];
console.log(this.images$)
*/

   /* this.wp.getSlide().subscribe(
      data => {
        this.images=(data[0])
          console.log("PATCH Request is successful ",  this.images[0]);
      },
      error => {
          console.log("Error", error);
      }
  );*/

    //.pipe(delay(2))

//}



 

}
