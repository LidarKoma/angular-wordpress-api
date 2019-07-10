import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { WordpressService } from './wordpress.service';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  //images: Array<string>;

  //images$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    //this.images$ = this.wp.getSlide();
    //console.log(this.images$)
  }

  ngOnInit() {
  
  }

 
}