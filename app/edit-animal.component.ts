import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="selectedAnimal">
    <h3>Edit {{selectedAnimal.name}}'s Details</h3>
    <div class="form-group">
      <label>Enter Name</label>
      <input class="form-control" type="text" [(ngModel)]="selectedAnimal.name">
    </div>
    <div class="form-group">
      <label>Enter Age</label>
      <input class="form-control" type="number" [(ngModel)]="selectedAnimal.age">
    </div>
    <div class="form-group">
      <label>Enter Number Caretakers</label>
      <input class="form-control" type="number" [(ngModel)]="selectedAnimal.caretakers">
    </div>
    <div class="form-group">
      <button class="btn btn-success btn-sm" (click)="doneButtonClicked()">Done</button>
    </div>
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
