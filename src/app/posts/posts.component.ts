import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../wordpress.service';
import { delay, share } from 'rxjs/operators';
import { Input } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$:  Array<any>;
  private data$: Array<any>;
  images$: Observable<any[]>;
  
  @Input() childMessage: string;

  constructor(private wp: WordpressService) {

    //this.posts$ = this.wp.getPosts();

    console.log(this.images$)

  }

  ngOnInit() {
    window.scroll(0,0);

    /*this.wp.getPosts().subscribe( data => {
      this.posts$  = data;
    });

    this.wp.getData().subscribe( data => {
      this.data$ = data;
    });*/

    //.pipe(delay(2000)
  //);
    //this.images$ = this.wp.getSlide();



    this.wp.getCars().subscribe( data => {
      //this.posts$  = data[0];

      this.posts$  = data;
      console.log("lklj" +this.posts$)
    });

    this.wp.getData().subscribe( data => {
      this.data$ = data;
    });

  }

}
