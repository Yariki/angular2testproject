import {Injectable} from '@angular/core';
import * as firebase from  'firebase';

Injectable()
export class AuthService {


  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch( error => console.log(error));
  }

  signin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(responce => console.log(responce))
      .catch(error => console.log(error));
  }

}
