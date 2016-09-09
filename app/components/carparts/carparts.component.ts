import {Component} from '@angular/core';
import {CARPARTS} from './carpart.mock';
import {CarPart} from './carparts.model';


@Component({
	selector:'car-parts',
	templateUrl: 'app/components/carparts/carparts.template.html',
	styleUrls:['app/components/carparts/carparts.component.css']
})

export class CarPartsComponent{
 	carParts : CarPart[];
	 ngOnInit(){
		this.carParts = CARPARTS;
	 }

	totalCarParts(){
		let sum = 0;
		for (let carPart of this.carParts){
			sum += carPart.inStock;
		}
		return sum;
 	}
	 upQuantity(carPart){
		 carPart.quantity++;
	 }
}
