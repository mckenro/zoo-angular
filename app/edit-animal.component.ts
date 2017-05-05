import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="selectedAnimal">
    <h3>Edit {{selectedAnimal.name}}'s Details</h3>
    <label>Enter Name</label>
    <input type="text" [(ngModel)]="selectedAnimal.name">
    <label>Enter Age</label>
    <input type="number" [(ngModel)]="selectedAnimal.age">
    <label>Enter Number Caretakers</label>
    <input type="number" [(ngModel)]="selectedAnimal.caretakers">
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() selectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
