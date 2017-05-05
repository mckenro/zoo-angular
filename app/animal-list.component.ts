import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
    <p *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}} <button class="btn btn-primary btn-xs" (click)="editAnimalClicked(currentAnimal)">Edit</button></p>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editAnimalClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
