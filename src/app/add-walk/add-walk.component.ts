import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../dog';
import Walk from '../walk';

@Component({
  selector: 'app-add-walk',
  templateUrl: './add-walk.component.html',
  styleUrls: ['./add-walk.component.scss']
})
export class AddWalkComponent implements OnInit {

  @Input() dog : Dog = new Dog();

  constructor() { }

  ngOnInit() {
  }

  addWalk() {
    let walk = new Walk();
    
  }

}
