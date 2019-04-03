import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material';
import {Food, FoodService} from '../services/food.service';
import {DishesService} from '../services/dishes.service';
import {MatSlideToggleChange} from '@angular/material/typings/slide-toggle';


@Component({
    selector: 'app-dishes',
    templateUrl: './dishes.component.html',
    styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
    filterPanelOpenState = false;
    filterTitle = '';
    desserts: Food[] = [];
    sortedData: Food[];

    filter = {
        'unfilled': true,
        'filled': true,
        'createdByMe': true,
        'createdByOther': true
    };


    constructor(private dishesSrv: DishesService,
                private foodSrv: FoodService) {

    }

    sortData(sort: Sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }

        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name':
                    return compare(a.name, b.name, isAsc);
                case 'calories':
                    return compare(a.calories, b.calories, isAsc);
                case 'fat':
                    return compare(a.fat, b.fat, isAsc);
                case 'carb':
                    return compare(a.carb, b.carb, isAsc);
                case 'protein':
                    return compare(a.protein, b.protein, isAsc);
                default:
                    return 0;
            }
        });
    }

    ngOnInit() {
        this.updateFilterTitile();
        this.updateListQuery();
        this.getData();
    }

    getData() {
        this.dishesSrv.getDishes().subscribe((res) => {
            this.desserts = res;
            this.sortedData = this.desserts.slice();
        });
    }

    filterControlChanged(ev: MatSlideToggleChange) {
        this.filter[ev.source.ariaLabel] = ev.checked;
        this.updateFilterTitile();
        this.updateListQuery();
    }

    updateFilterTitile() {
        let newFilterCaption = 'Show';
        if (this.filter.filled && !this.filter.unfilled) {
            newFilterCaption += ' filled';
        } else if (!this.filter.filled && this.filter.unfilled) {
            newFilterCaption += ' unfilled';
        } else {
            newFilterCaption += ' all';
        }

        newFilterCaption += ' dishes';

        if (this.filter.createdByMe && !this.filter.createdByOther) {
            newFilterCaption += ' created by me';
        } else if (!this.filter.createdByMe && this.filter.createdByOther) {
            newFilterCaption += ' created by other';
        }
        this.filterTitle = newFilterCaption;
    }

    updateListQuery() {

    }


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

