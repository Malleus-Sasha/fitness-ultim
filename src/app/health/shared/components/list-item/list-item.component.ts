import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../../services/meals/meals.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: Meal;

  constructor() { }

  ngOnInit(): void {
  }

}
