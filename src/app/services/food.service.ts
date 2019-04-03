import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AuthService} from './auth.service';

export class Food {
    id: string;
    name: string = '';
    name_lk: string = '';
    protein: number = 0;
    fat: number = 0;
    carb: number = 0;
    calories: number = 0;
    tsp_weight: number = 0;
    tbsp_weight: number = 0;
    need_clarify: boolean = true;
    moderated: boolean = false;
    added_by: string = '';

    public constructor(init?: Partial<Food>) {
        Object.assign(this, init);
    }

    public prepareToInsert() {
        this.name_lk = this.name.toLowerCase();
        this.need_clarify = !(this.calories > 0 && (this.carb > 0 || this.fat > 0 || this.protein > 0));
        return JSON.parse(JSON.stringify(this));
    }
}

@Injectable({
    providedIn: 'root'
})

export class FoodService {

    private dishesCollection: AngularFirestoreCollection<Food>;

    constructor(private authSrv: AuthService,
                private afs: AngularFirestore
    ) {
        this.dishesCollection = afs.collection('dishes');
    }

    addFood(food: Food) {
        const foodToSave = new Food(food);
        foodToSave.added_by = this.authSrv.userId;
        return this.dishesCollection.add(foodToSave.prepareToInsert())
            .catch((err) => {
                throw err.message;
            });
    }

    saveFood(food: Food, id: string) {
        const foodToSave = new Food(food);
        const foodDoc = this.dishesCollection.doc(id);
        return foodDoc.update(foodToSave.prepareToInsert())
            .catch((err) => {
                throw err;
            });
    }

    getFood(id: string) {
        const foodDoc = this.dishesCollection.doc<Food>(id);
        return foodDoc.get();
    }

    deleteFood(id: string) {
        return this.dishesCollection.doc<Food>(id).delete();
    }
}
