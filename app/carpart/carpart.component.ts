import { Component } from '@angular/core';
import { CarPart } from './carpart';
import {RacingDataService} from '../services/racing-data.service';
import { OnInit } from '@angular/core';

@Component({
    selector : 'car-part',
    templateUrl : 'app/carpart/carpart.component.html',
    // E2:directives
    styleUrls:['app/carpart/carpart.style.css']
})

export class CarPartComponent implements OnInit {
    title = "Ultra Racing";
    carParts :  CarPart[];
    
    constructor(private racingDataService : RacingDataService){}
    ngOnInit() {   
         this.racingDataService.getCarParts() .subscribe(carParts => this.carParts = carParts);  
    }

    totalCarParts(){
        let sum = 0;
        
        if (Array.isArray(this.carParts)){
            for(let carPart of this.carParts){
                sum += carPart.inStock;
            }
        }
        return sum;
    }

    upQuantity(carPart){
        if(carPart.quantity < carPart.inStock) carPart.quantity++;
        if(carPart.inStock == 0) alert("Out of stock !!! Can't be added quantity")
    }
    downQuantity(carPart){
        if(carPart.quantity > 0) carPart.quantity--;
        if(carPart.quantity == 0) alert("There's no items already!!!")
    }

    checkValidQuantity(carPart){
		let regex = /^\d+$/;
		let quantity = regex.exec(carPart.quantity);
		if(quantity == null){
			carPart.quantity = null;
			return;
		}
		if(carPart.quantity > carPart.inStock){
			carPart.quantity = null;
		} else if(carPart.quantity < 0){
			carPart.quantity = null;
		}
    }
}