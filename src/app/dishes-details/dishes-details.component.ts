import {Component, OnInit} from '@angular/core';
import {FoodService, Food} from '../services/food.service';
import {ActivatedRoute, Router} from '@angular/router';

class FoodData extends Food {
}


@Component({
    selector: 'app-dishes-details',
    templateUrl: './dishes-details.component.html',
    styleUrls: ['./dishes-details.component.scss']
})
export class DishesDetailsComponent implements OnInit {
    model = new FoodData();
    submitted = false;
    deleted = false;
    actionError = '';
    foodId: string = '';
    isGrantToDelete: boolean = true; /// vTODO:  Should chack that owner or admin

    onSubmit() {
        this.submitted = true;
        this.actionError = '';
        if (this.foodId === '') {
            this.foodSrv.addFood(this.model as Food)
                .then((res) => {
                    this.foodId = res.id;
                    this.router.navigateByUrl('/dishes');
                })
                .catch((errorMesssage) => {
                    this.actionError = errorMesssage;

                })
                .finally(() => {
                    this.submitted = false;
                });
        } else {
            this.foodSrv.saveFood(this.model as Food, this.foodId)
                .catch((errorMesssage) => {
                    this.actionError = errorMesssage;
                })
                .finally(() => {
                    this.submitted = false;
                });
        }
    }

    constructor(
        private foodSrv: FoodService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }


    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.submitted = true;
                this.foodId = params['id'];
                this.foodSrv.getFood(this.foodId)
                    .subscribe((data) => {
                        if (data) {
                            this.model = data.data() as FoodData;
                            this.submitted = false;
                        } else {
                            this.router.navigateByUrl('/dishes');
                        }
                    });
            }
        });
    }
    deleteItem(id: string) {
        this.deleted = true;
        this.submitted = true;
        this.foodSrv.deleteFood(id).then(
            () => {
                this.router.navigateByUrl('/dishes');
            }
        );
    }
}
