import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template:`
  <div class="container">
    <h1>Welcome to Animal Tracker</h1>
    <div class="row">
      <div class="col-md-8">
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      </div>
      <div class="col-md-4">
        <edit-animal [selectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Panda', 'Ting-Ting', 4, 'shoots and leaves', 'Bamboo Forest', 2, 'Female', 'naps are the best', 'noisy humans'),
    new Animal('Panda', 'Ting-Ting', 4, 'shoots and leaves', 'Bamboo Forest', 2, 'Female', 'naps are the best', 'noisy humans'),
    new Animal('Panda', 'Ting-Ting', 4, 'shoots and leaves', 'Bamboo Forest', 2, 'Female', 'naps are the best', 'noisy humans'),
    new Animal('Tiger', 'Jumanji', 1, 'raw meat', 'Dense Forest', 2, 'Male', 'playing in water', 'being alone'),
  ];

  selectedAnimal: null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimal: Animal) {
    this.masterAnimalList.push(newAnimal);
  }
}
