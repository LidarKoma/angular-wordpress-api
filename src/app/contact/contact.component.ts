import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';
import { empty } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgwWowService } from 'ngx-wow';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  posts$: any[];
  full_name: string="";
  email: string="";
  body: string="";

  registerForms: FormGroup;
  submitted = false;

  constructor(private wp: WordpressService,private formBuilder: FormBuilder,private wowService: NgwWowService) { 

    this.wowService.init(); 
  }

  ngOnInit() {
    this.registerForms = this.formBuilder.group({
      full_name: ['', Validators.required],

      
      email: ['', [Validators.required, Validators.email]],
      body: ['', [Validators.required]]

  });
  }
  


      // convenience getter for easy access to form fields
      get f() { return this.registerForms.controls; }
   /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */


  processForm() {
    this.submitted = true;
    this.email=JSON.stringify(this.registerForms.value.email);
    this.full_name=JSON.stringify(this.registerForms.value.full_name);
    this.body=JSON.stringify(this.registerForms.value.body);
    console.log(this.body)
     // stop here if form is invalid
     if (this.registerForms.invalid)
     {
     alert("email can not be empty"+ this.full_name); 
     return;
  }
  else{
  


    this.wp.send(this.full_name,this.email,this.body).subscribe( data => {
      this.posts$  = data
    const allInfo = `My name is ${this.full_name}. My email is ${this.email}. My message is ${this.body}`;
    alert(this.posts$); 
   this.full_name="";
    this.email="";
    this.body="";
  });
  }
}
 

}