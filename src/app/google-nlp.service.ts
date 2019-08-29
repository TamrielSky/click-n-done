import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class GoogleNlpService {

  constructor(public http: Http) { }

  getContent(type, content, encodingType) {
    const body = {
      document:{
        type: type,
        content: content
      },
      encodingType: encodingType
    };
    const url = 'https://guarded-taiga-28378.herokuapp.com/nlpServer?name='+content;
    // return this.http.post(url, body);
    return this.http.get(url);
}
	
}
