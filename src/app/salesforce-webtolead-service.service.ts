import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})

export class SalesforceWebtoleadServiceService {

  constructor(public http: Http) { }

  	saveLead(first_name,last_name, company, phone, state, street, zipcode, country, city, email) {
		const body = {
			"first_name": first_name,
			"last_name": last_name,
			"company": company,
			"phone": phone,
			"state": state,
			"street": street,
			"zipcode": zipcode,
			"country": country,
			"city": city,
			"email": email
		}
		return this.http.post('http://rbalasubr-ltm1.internal.salesforce.com:8080/convertToSalesforceLead', body);
	}
	
}
