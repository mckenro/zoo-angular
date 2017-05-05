import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'animal-list',
  template:`
  <h2>Animals</h2>
  <div class="row">
    <div class="col-md-6">
      <form id="filter">
        <label>Filter Animals by Species</label>
        <input class="form-control" type="text" [(ngModel)]="term" name="term" />
      </form>
    </div>
    <div class="col-md-6">
      <div class="form-group">
      <label for="animalAge">Filter by Age</label>
        <select id="animalAge" class="form-control" (change)="onChange($event.target.value)">
          <option value="allAnimals">All Animals</option>
          <option value="youngerAnimals">Younger Animals (2 years and under)</option>
          <option value="olderAnimals">Older Animals (over 2 years)</option>
        </select>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4" *ngFor="let currentAnimal of childAnimalList | age:filterByAge | filter:term">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h4 class="panel-title">{{currentAnimal.name}}</h4>
        </div>
        <div class="panel-body">
          <p><strong>Species:<br> </strong>{{currentAnimal.species}}</p>
          <p><strong>Age:<br> </strong>{{currentAnimal.age}}</p>
          <p><strong>Diet:<br> </strong>{{currentAnimal.diet}}</p>
          <p><strong>Location:<br> </strong>{{currentAnimal.location}}</p>
          <p><strong>Caretakers:<br> </strong>{{currentAnimal.caretakers}}</p>
          <p><strong>Sex:<br> </strong>{{currentAnimal.sex}}</p>
          <p><strong>Likes:<br> </strong>{{currentAnimal.likes}}</p>
          <p><strong>Dislikes:<br> </strong>{{currentAnimal.dislikes}}</p>
          <button class="btn btn-primary btn-xs" (click)="editAnimalClicked(currentAnimal)">Edit Animal</button>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editAnimalClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
