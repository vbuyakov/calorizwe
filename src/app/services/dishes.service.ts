import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {Food} from './food.service';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class DishesService {
    private dishesCollection: AngularFirestoreCollection<Food>;
    public dishes: Observable<Food[]> = new Observable();

    constructor(private authSrv: AuthService,
                private afs: AngularFirestore) {
        this.dishesCollection = afs.collection<Food>('dishes', ref =>
        ref.where('need_clarify', '==', true).orderBy('name_lk'));

    }


    getDishes() {
       return this.dishesCollection.snapshotChanges(['added', 'removed', 'modified'])
            .pipe( map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data() as Food;
                    data.id = a.payload.doc.id;
                    return data;
                });
            }));
    }
}
