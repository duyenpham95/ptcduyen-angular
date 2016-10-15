import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RaceComponent} from '../race/race.component';
import {RacingDataService} from './racing-data.service';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
// E1
import {FormsModule} from '@angular/forms';
// E2
import {CarPartComponent} from '../carpart/carpart.component';

const routes: Routes = [
  { path: 'carparts', component: CarPartComponent},
];

@NgModule({
    imports : [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpModule],
    declarations : [RaceComponent,CarPartComponent],
    bootstrap : [RaceComponent],
    providers: [RacingDataService]
})

export class AppModule{}