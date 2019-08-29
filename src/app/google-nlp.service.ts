import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class GoogleNlpService {

  constructor(public http: Http) { }

  getContent(type, content, encodingType) {
    console.log("nlpserver api called for content", content);
    
    const url = 'https://guarded-taiga-28378.herokuapp.com/nlpServer?name='+encodeURIComponent(content);
    return this.http.get(url);
  }
	
}
