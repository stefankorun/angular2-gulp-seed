import {Component} from 'angular2/core';

@Component({
  selector: 'pagination',
  template: `
    <div class="component-pagination">
      <span *ngFor="#i of items">{{ i }}</span>
    </div>
   `
})
export class PaginationComponent {
  items:Array<number> = [1, 2, 5];

  constructor() {
  }
}
