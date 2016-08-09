import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'pint-display',
    inputs: ['keg'],
  template:`
    <img src="./../resources/img/pint-emoji.png">
    {{ keg.pints }}
  `
})
export class PintComponent {
  public keg: Keg;
}
