import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class SalesforceWebToLeadServiceService {

  constructor(public http: Http) { }

  	saveLead(first_name, last_name, email, company, city, state, oid) {
		const body = {
			"first_name": first_name,
			"last_name": last_name,
			"email": email,
			"company": company,
			"oid": oid,
			"retURL": "http://google.com",
			"debug": 1
		}
		const headers: Headers = new Headers({"Content-Type'" : 'application/x-www-form-urlencoded'})
		
		console.log("web2lead post body ---",JSON.stringify(body));

		return this.http.post('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', 
			body, 
			{headers: headers}
		);
	}
	
}
