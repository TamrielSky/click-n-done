import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showtext',
  templateUrl: './showtext.page.html',
  styleUrls: ['./showtext.page.scss'],
})
export class ShowtextPage implements OnInit {
  image:any
  result:any
  feature:any

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.route.queryParams.subscribe(params => {
		if (params && params.special && params.result && params.feature ) {
			this.image = JSON.parse(params.special);
			this.result = JSON.parse(params.result);
			this.feature = JSON.parse(params.feature);
		}
		this.result = this.result.responses[0].textAnnotations
  	});
  }

}
