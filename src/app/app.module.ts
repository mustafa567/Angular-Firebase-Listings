import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddlistingComponent } from './components/addlisting/addlisting.component';
import { EditlistingComponent } from './components/editlisting/editlisting.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'addlisting', component: AddlistingComponent },
  { path: 'listing/:id', component: ListingComponent },
  { path: 'editlisting/:id', component: EditlistingComponent }
]


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBpVgTrEnD_xEtzuSrDuSCXaVGsngq-VTc",
  authDomain: "angular2-listings.firebaseapp.com",
  databaseURL: "https://angular2-listings.firebaseio.com",
  projectId: "angular2-listings",
  storageBucket: "angular2-listings.appspot.com",
  messagingSenderId: "371722188391"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddlistingComponent,
    EditlistingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
