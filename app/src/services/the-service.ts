import {Injectable} from 'angular2/core';
import * as Rx from "rxjs/Rx";

class iTheService {
  prop1: boolean;
  prop2: number;
}

@Injectable()
export class TheService extends iTheService {

  constructor() {
    console.log(this);
    super();
  }
  //items: Rx.Subject<Array<number>> = new Rx.BehaviorSubject<Array<number>>([]);
}
