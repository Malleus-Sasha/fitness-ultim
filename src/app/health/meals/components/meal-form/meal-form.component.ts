import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Meal } from 'src/app/health/shared/services/meals/meals.service';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealFormComponent implements OnInit {

  @Output() create = new EventEmitter<Meal>();

  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  get required() {
    return (
      this.form.get('name').hasError('required') && 
      this.form.get('name').touched
    )
  }

  createMeal() {
    console.log('Create: ', this.form.value);
    if(this.form.valid) {
      console.log('- Valid- Create');
      this.create.emit(this.form.value);
    }
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  addIngredient() {
    this.ingredients.push(new FormControl(''));
  }

  

}
