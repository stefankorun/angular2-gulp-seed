import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from "angular2/common";

import {PaginationComponent} from './components/pagination';
import {AuthService} from "./services/_all";

@Component({
  selector: 'ng2-app',
  templateUrl: 'src/app.html',
  directives: [[PaginationComponent]]
})
export class App {
  constructor(public authService: AuthService) {
    console.log(this);
  }
}
