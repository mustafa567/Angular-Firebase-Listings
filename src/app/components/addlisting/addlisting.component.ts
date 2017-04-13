import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.component.html',
  styleUrls: ['./addlisting.component.css']
})
export class AddlistingComponent implements OnInit {

  title: any;
  owner: any;
  bed: any;
  city: any;
  price: any;
  type: any;
  image: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAdSubmit() {
    let listing = {
      title: this.title,
      owner: this.owner,
      city: this.city,
      bedrooms: this.bed,
      type: this.type,
      price: this.price
    }

    this.firebaseService.addListing(listing);
    this.router.navigate(['/listings']);

  }

}
