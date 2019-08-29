import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})

export class SalesforceWebtoleadServiceService {

  constructor(public http: Http) { }

  	saveLead(oid,first_name,last_name, company, phone, state, street, zipcode, country, city, email) {
		
		console.log("posted zipcode - ", zipcode);	

		const body = {
			"oid": oid,
			"first_name": first_name,
			"last_name": last_name,
			"company": company,
			"phone": phone,
			"state": state,
			"street": street,
			"zip": zipcode,
			"country": country,
			"city": city,
			"email": email
		}
		return this.http.post('https://guarded-taiga-28378.herokuapp.com/convertToSalesforceLead', body);
	}
	
}
