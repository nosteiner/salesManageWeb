import { Component, OnInit, OnDestroy } from '@angular/core';

import { DogsService } from '../dogs.service';
import { Dog } from '../dog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit, OnDestroy {

  intervalId: number;
  selectedDog : Dog;
  dogs = new Array<Dog>();
  filterTerm : string;
  dateFormat = 'fullDate'

  constructor(private dogsService : DogsService, private route : ActivatedRoute, private router : Router) {
    this.dogs = dogsService.getDogs();
   }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.filterTerm = queryParams.name;
    });
    this.intervalId = window.setInterval(() => console.log('Hello!'),  1000);
  }

  ngOnDestroy() {
    window.clearInterval(this.intervalId);
  }

  onFilterChanged(filterString) {
    this.router.navigate(['.'], { queryParams: { name: filterString }});
  }

  removeDog(index) {
    this.dogs.splice(index, 1);
  }

  toggleDate() {
    this.dateFormat == 'fullDate' ? this.dateFormat = 'shortDate' : this.dateFormat = 'fullDate';
  }

  selectDog(dog) {
    this.selectedDog = dog;
  }

  handleAddWalk(walk) {
    this.dogsService.addWalk(this.selectedDog, walk);
  }


}
