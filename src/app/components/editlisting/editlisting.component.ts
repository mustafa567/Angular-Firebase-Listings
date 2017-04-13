import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-editlisting',
  templateUrl: './editlisting.component.html',
  styleUrls: ['./editlisting.component.css']
})
export class EditlistingComponent implements OnInit {

  ID: any;
  title: any;
  owner: any;
  city: any;
  bed: any;
  type: any;
  price: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.ID = this.route.snapshot.params['id'];
    this.firebaseService.getListingDetails(this.ID).subscribe(listing => {

      this.title = listing.title;
      this.owner = listing.owner;
      this.city = listing.city;
      this.bed = listing.bedrooms;
      this.type = listing.type;
      this.price = listing.price;

    });
  }

  onEditSubmit() {

    let listing = {
      title: this.title,
      owner: this.owner,
      city: this.city,
      bedrooms: this.bed,
      type: this.type,
      price: this.price
    }

    this.firebaseService.udpdateService(this.ID, listing);
    this.router.navigate(['/listings']);
  }

}
