import {Component} from '@angular/core';
import {CarPartsComponent} from '../carparts/carparts.component';

@Component({
	selector: 'race',
	templateUrl:'app/components/race/race.template.html',
	directives: [CarPartsComponent]
})

export class RaceComponent{
	 title = 'Ultra Racing';
}
