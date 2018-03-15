import {Injectable} from '@angular/core';
import * as firebase from  'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  private token: string;

  constructor(private router: Router) {}


  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch( error => console.log(error));
  }

  signin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(responce => {
        console.log(responce);
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => this.token = token);
      })
      .catch(error => console.log(error));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

}
