import { Component } from 'angular2/core';
// import { KegComponent } from './keg.component'
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Keg List</h1>
    <h3 *ngFor="#keg of kegs" (click)="kegWasSelected(keg)">{{ keg.name }}</h3>
  </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Apocalypse IPA", "10 Barrel", 87, 6.8, 0),
      new Keg("Budweiser", "Anheuser-Busch", 78, 5, 1),
      new Keg("Fresh Squeezed IPA", "Deschutes", 164, 6.4, 2),
      new Keg("ESB", "Redhook", 186, 5.8, 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
