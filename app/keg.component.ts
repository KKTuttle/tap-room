import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template:`
  <h3>{{ keg.name }}</h3>
  $ {{ (keg.price/40).toFixed(2) }}
  `
})

export class KegComponent {
  public keg: Keg;
}
