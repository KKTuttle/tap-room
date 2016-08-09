import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template:`
    <div class='keg-form'>
      <h3>Add a new keg:</h3>
        <input placeholder="Name" class="col-sm-8 input-lg" #newName>
        <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
        <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
        <input placeholder="Alcohol Content" class="col-sm-8 input-lg" #newAlcoholContent>
        <button (click)="addKeg(newName, newBrand, newPrice, newAlcoholContent)" class="btn-warning btn-lg add-button">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcoholContent: HTMLInputElement) {
    this.onSubmitNewKeg.emit({
      name: userName.value,
      brand: userBrand.value,
      price: userPrice.value,
      alcoholContent: userAlcoholContent.value
    });
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlcoholContent.value = "";
  }
}
