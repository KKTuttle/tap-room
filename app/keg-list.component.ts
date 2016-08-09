import { Component, EventEmitter } from 'angular2/core';
// import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
// import { NewKegComponent } from './new-keg.component';
//
@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  template: `
  <h3 *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)">
    {{ currentKeg.name }}
  </h3>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg)
    this.onKegSelect.emit(clickedKeg);
  }
}
