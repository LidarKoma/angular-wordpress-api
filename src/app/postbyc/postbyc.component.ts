import { Component, OnInit, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../wordpress.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postbyc',
  templateUrl: './postbyc.component.html',
  styleUrls: ['./postbyc.component.scss']
})
export class PostbycComponent implements OnInit {
  posts$: Observable<any[]>;
  //posts$2: Observable<any[]>;
  posts$2:{}
post$Array: any
  constructor(private router: Router, private route: ActivatedRoute,private wp: WordpressService) {
    //this.posts$ = this.wp.getPostByCetgory();
    this.getPost2(this.route.snapshot.params['id']);

  }

  ngOnInit() {
    //this.getPost(this.route.snapshot.params['id']);
    this.getPost2(this.route.snapshot.params['id']);
  }

  //getPost(id) {
    //this.posts$ = this.wp.getPostByCetgory(id);
        //}
        
        getPost2(id) {
          this.wp.getPostByCetgory2(id).subscribe(
            data => {
              this.posts$2=(data)
                console.log("PATCH Request is successful ",  this.posts$2);
            },
            error => {
                console.log("Error", error);
            }
        );
      


        }
}
