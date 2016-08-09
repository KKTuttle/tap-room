import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent} from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { PintComponent } from './pint.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent, PintComponent],
  template: `
  <div *ngFor="#currentKeg of kegList"class="row">
    <keg-display class="col-sm-4"
      (click)="kegClicked(currentKeg)"
      [class.selected]="currentKeg === selectedKeg"
      [keg]="currentKeg">
    </keg-display>
    <pint-display class="col-sm-4 col-sm-offset-4"
      (click)="decreasePints(currentKeg)"
      [keg]="currentKeg">
    </pint-display>
  </div>
  <edit-keg-details *ngIf="selectedKeg"[keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event.name, $event.brand, $event.price, $event.alcoholContent)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(name: string, brand: string, price: number, alcoholContent: number): void {
    this.kegList.push(
      new Keg(name, brand, price, alcoholContent, this.kegList.length)
    );
  }
  decreasePints(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
    this.selectedKeg.pints -= 1;
  }
}
