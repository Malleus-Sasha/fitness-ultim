import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/shared/services/auth.service';
import { Store } from 'store';

export interface Meal {
  name: string,
  ingredients: string[],
  timestamp: number,
  $key: string,
  $exists: () => boolean
}

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  // meals$: Observable<any> = this.db.list(`meals/sxhxpNnvLUePas44iVq0MIpJC3j2`)
  meals$: Observable<any> = this.db.list(`meals/${this.uid}`)
    .valueChanges().pipe(
      tap((next) => {
        console.log('--- tap<Meal[]>', next);
        this.store.set('meals', next);
      }
      ));

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    console.log(this.store.value.user.uid);
  }

  get uid() {
    return this.store.value.user.uid;
  }

  addMeal(meal: Meal) {
    return this.db.list(`meals/${this.uid}`).push(meal);
  }
}
