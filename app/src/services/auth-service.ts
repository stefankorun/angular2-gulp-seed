import {Injectable} from 'angular2/core';
import * as Rx from 'rxjs/Rx';

import {User} from './data/models/User';


@Injectable()
export class AuthService {
  private subject:Rx.BehaviorSubject<any> = new Rx.BehaviorSubject(null);
  private user:User;

  constructor() {
    this.subject.subscribe(function (data) {
      console.log(data);
    });

    this.userLogin();
    //this.userLogout();
    //this.userLogin();
    //this.userLogout();
    console.log(this);
  }

  userLogin() {
    //this.subject.next(new User({name: 'Stefan', email: 'stefan@stefan.com', username: 'korun', password: 'korun'}))
    this.subject.next({name: 'Stefan', email: 'stefan@stefan.com', username: 'korun', password: 'korun'});
  }

  userLogout() {
    this.subject.next(null);
  }
}
