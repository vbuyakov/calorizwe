import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {Food} from './food.service';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  private dishesCollection: AngularFirestoreCollection<Food>;

  constructor(private authSrv: AuthService,
              private afs: AngularFirestore) {
    this.dishesCollection = afs.collection<Food>('dishes');
  }
}
