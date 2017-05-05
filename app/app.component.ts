import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { FilterPipe } from './filter.pipe';

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
    new Animal(
    'Panda',
    'Ting-Ting',
    4,
    'shoots and leaves',
    'Forest',
    2, 'Female',
    'naps are the best',
    'noisy humans'),

    new Animal(
    'Chimpanzee',
    'Lola',
    2,
    'bananas',
    'Jungle',
    2, 'Female',
    'laughing',
    'thunder'),

    new Animal(
    'Aligator',
    'Charles',
    13,
    'fish',
    'Swamp',
    1, 'Male',
    'warm water',
    'loud noises'),

    new Animal(
    'Cheetah',
    'Flash',
    4,
    'meat',
    'The Savanah',
    1, 'Female',
    'playing fetch',
    'cold weather'),

    new Animal(
    'Spider Monkey',
    'Goombah',
    6,
    'melon',
    'Rainforest',
    1, 'Male',
    'bananas',
    'bad smells'),

    new Animal(
    'Giraffe',
    'Too Tall Jones',
    2,
    'leaves',
    'The Savanah',
    2, 'Male',
    'stretching',
    'mice'),

    new Animal(
    'Gorilla',
    'Coco',
    11,
    'lasagna',
    'Rainforest',
    2, 'Female',
    'watching people',
    'snakes'),

    new Animal(
    'Gorilla',
    'King Kong',
    6,
    'Snakes',
    'Rainforest',
    2, 'Male',
    'tall buildings',
    'airplanes'),

    new Animal(
    'Otter',
    'Bingo',
    1,
    'clams',
    'River',
    1, 'Female',
    'the backstroke',
    'manatees'),
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
