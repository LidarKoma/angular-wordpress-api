import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-workbyservices',
  templateUrl: './workbyservices.component.html',
  styleUrls: ['./workbyservices.component.scss']
})
export class WorkbyservicesComponent implements OnInit {
  id:number;
  posts$: Observable<any[]>;
  //posts$2: Observable<any[]>;
  posts$2:Array<any>;
post$Array: any
  constructor(private router: Router, private route: ActivatedRoute,private wp: WordpressService) {
    //this.posts$ = this.wp.getPostByCetgory();
    //this.getPost2(this.route.snapshot.params['id']);
    //this.id=this.wp.getter();

  }

  ngOnInit() {
    window.scroll(0,0);
    //this.wp.setter(this.id);
    this.id=this.wp.getter();

    //this.getPost(this.route.snapshot.params['id']);
    this.getPost2(this.route.snapshot.params['id'],this.route.snapshot.params['name']);
   // this.getPost2(this.id);

  }

  //getPost(id) {
    //this.posts$ = this.wp.getPostByCetgory(id);
        //}
        
        getPost2(id, name) {
          this.wp.getWorkstyle(id).subscribe(
            data => {
              this.posts$2=data['data']['works']
                console.log("PATCH Request is successful ",  this.posts$2);
            },
            error => {
                console.log("Error", error);
            }
        );
      


        }
}
