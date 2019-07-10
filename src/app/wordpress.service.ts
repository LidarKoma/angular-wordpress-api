import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
   foods = [
    { "full_name": "lidar", "email": "lidarkoma@gmail.com", "body":"lklklk" }
  
  ];
data:Observable<any[]>
id:number;
  constructor(private http: HttpClient) { }

  getPosts():Observable<any> {
    return this.http.get<any[]>('http://localhost/wp/wp-json/wp/v2/posts?_embed', {
      params: {
        per_page: '6'
      }
    });
  }

  send(full_name,email,body) {
    return this.http.get<any[]>('http://localhost/wp/wp-json/send-contact-form/v1/contact?full_name='+ full_name+'&email='+email+'&body='+body)
    //this.data=this.data['data']; 
  }

  getData() {
    return this.http.get<any[]>('https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=9&q=data')
    //this.data=this.data['data']; 
  }

  getPost(id:number): Observable<any> {
    let b=this.http.get('http://localhost/wp/wp-json/wp/v2/posts/'+ 46)
    return this.http.get('http://localhost/wp/wp-json/wp/v2/posts/'+ id)
  }
  getCetgory(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/wp/wp-json/wp/v2/categories')
  }

  getPostByCetgory(id:number): Observable<any> {
    return this.http.get<any[]>('http://localhost/wp/wp-json/wp/v2/posts?categories=' +id)
  }
  getSlide(): Observable<any[]> {
   // return this.http.get<any[]>('http://localhost/wp/wp-json/wp/v2/media?id=70')
    //return this.http.get<any[]>('http://localhost/wp/wp-json/wp/v2/car', {
      return this.http.get<any[]>('http://localhost/wp/wp-json/wp/v2/sliders?fields=acf',{ 
    params: {
        per_page: '6'
      }
    });
  

  }
  getGallery():Observable<any> {
    // return this.http.get<any[]>('http://localhost/wp/wp-json/wp/v2/media?id=70')
     return this.http.get<any[]>('http://localhost/wp/wp-json/wp/v2/car')
 
   }

   getGallery2(id:number):Observable<any> {
    // return this.http.get<any[]>('http://localhost/wp/wp-json/wp/v2/media?id=70')
     return this.http.get('http://localhost/wp/wp-json/wp/v2/car/'+ id)
 
   }

   gettox(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/wp/wp-json/wp/v2/services?parent=0')
  }



  getPostByCetgory2(id:number) {
    return this.http.get<any[]>('http://localhost/wp/wp-json/wp/v2/car?services=' +id)
  }

  getCar(id:number): Observable<any> {
    //let b=this.http.get('http://localhost/wp/wp-json/wp/v2/car/'+ 46)
    return this.http.get('http://localhost/wp/wp-json/wp/v2/car/'+ id)
  }

   getCars():Observable<any[]> {
    return this.http.get<any[]>('http://localhost/wp/wp-json/wp/v2/car?_embed', {
      params: {
        per_page: '6'
      }
    });
  }
  getBooks():Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/api/books', {
      params: {
        per_page: '6'
      }
    });
  }

  

  getBook(id:number): Observable<any> {
    return this.http.get('http://localhost:8000/api/books/'+ id)
  }
  getServices(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/api/categories/')
  }
  getService(id:number): Observable<any> {
    return this.http.get('http://localhost:8000/api/categories/'+ id)
  }
  getWorkD(id:number): Observable<any> {
    return this.http.get('http://localhost:8000/api/works/'+ id)
  }
  getWorkstyle(id:number): Observable<any> {
    return this.http.get('http://localhost:8000/api/services/'+ id)
  }
  setter(id:number){
    this.id=id;
  }

 getter(){
   return this.id;
 }

}