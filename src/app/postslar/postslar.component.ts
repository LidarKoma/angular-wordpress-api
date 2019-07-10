import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-postslar',
  templateUrl: './postslar.component.html',
  styleUrls: ['./postslar.component.scss']
})
export class PostslarComponent implements OnInit {
  posts$:  Array<any>;

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    this.wp.getBooks().subscribe( data => {
      //this.posts$  = data[0];

      this.posts$  = data['data'];
      console.log("lklj" +this.posts$)
    });
  }

}
