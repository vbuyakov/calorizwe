import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatTableModule, MatSortModule, MatExpansionModule, MatSlideToggleModule} from '@angular/material';
import {FormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {MyInfoComponent} from './my-info/my-info.component';
import {DishesComponent} from './dishes/dishes.component';
import {DishesDetailsComponent} from './dishes-details/dishes-details.component';
import {WeightComponent} from './weight/weight.component';
import {TodayDietaryComponent} from './today-dietary/today-dietary.component';
import {DietaryLogComponent} from './dietary-log/dietary-log.component';
import {AuthService} from './services/auth.service';
import {environment} from '../environments/environment';
import { NavigatorComponent } from './navigator/navigator.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FoodService} from './services/food.service';


@NgModule({
    declarations: [
        AppComponent,
        LoginFormComponent,
        MyInfoComponent,
        DishesComponent,
        DishesDetailsComponent,
        WeightComponent,
        TodayDietaryComponent,
        DietaryLogComponent,
        NavigatorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        MatExpansionModule,
        MatSlideToggleModule
    ],
    providers: [AuthService, FoodService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
