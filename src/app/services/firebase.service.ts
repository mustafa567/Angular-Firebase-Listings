import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  constructor(private af: AngularFire) {
    this.folder = 'listingImages';
  }

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  folder: any;

  getListings() {
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
    return this.listings;
  }

  getListingDetails(ID) {

    this.listing = this.af.database.object('/listings/' + ID) as FirebaseObjectObservable<Listing>;
    return this.listing;
  }
  addListing(listing) {

    // Create root ref
    let storageRef = firebase.storage().ref();
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }

  }

  udpdateService(ID, listing) {
    return this.listings.update(ID, listing);
  }

  deleteListing(ID) {
    return this.listings.remove(ID);
  }

}


interface Listing {

  $key?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  owner?: string;
  bedrooms?: string;
  path?: any;

}
