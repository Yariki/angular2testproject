import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAwFQqbXmRgdnQgwY44MmKHc09y1R6w9pk',
      authDomain: 'ng-recipe-book-24b87.firebaseapp.com',
    });
  }

  onNavigate(args: string) {
    this.loadedFeature = args;
  }

}
