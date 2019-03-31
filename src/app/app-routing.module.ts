import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyInfoComponent} from './my-info/my-info.component';
import {DietaryLogComponent} from './dietary-log/dietary-log.component';
import {DishesComponent} from './dishes/dishes.component';
import {DishesDetailsComponent} from './dishes-details/dishes-details.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {TodayDietaryComponent} from './today-dietary/today-dietary.component';
import {WeightComponent} from './weight/weight.component';

const routes: Routes = [
  {path: 'my-info', component: MyInfoComponent},
  {path: 'dietary-log', component: DietaryLogComponent},
  {path: 'dishes', component: DishesComponent},
  {path: 'add-food', component: DishesDetailsComponent},
  {path: 'edit-food/:id', component: DishesDetailsComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'today', component: TodayDietaryComponent},
  {path: 'weight', component: WeightComponent},
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
