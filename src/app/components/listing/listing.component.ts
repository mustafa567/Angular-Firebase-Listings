import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ID: any;
  listing: any;
  imageUrl: any;

  ngOnInit() {

    this.ID = this.route.snapshot.params['id'];
    this.firebaseService.getListingDetails(this.ID).subscribe(listing => {
      this.listing = listing;
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.listing.path);
      storageRef.child(this.listing.path).getDownloadURL().then((url) => {
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
    })
  }

  onDelClick() {
    this.firebaseService.deleteListing(this.ID);
    this.router.navigate(['/listings']);
  }

}
