import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../wordpress.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  posts$: Observable<any[]>;
  posts$2: any[]=[];
  services: any[];


  constructor(private wp: WordpressService,private _router:Router) {
   this.posts$ = this.wp.getCetgory();
    this.wp.gettox().subscribe(
      data => {
        this.posts$2=data
          console.log("PATCH Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      }
  );


  this.wp.getServices().subscribe(
    data => {
      this.services=data['data']
        console.log("PATCH Request is successful ", data);
    },
    error => {
        console.log("Error", error);
    }
);

    //console.log("lkkk" +JSON.stringify(this.posts$))
  }

  ngOnInit() {
    window.scroll(0,0);

  }
  work(id) {
    this.wp.setter(id);
     this._router.navigate(['/work']);
console.log(id);
  }

}
