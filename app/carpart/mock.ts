import {CarPart} from './carpart';

export const CARPARTS : CarPart[] = [{
        "id": 1,  
        "name": "Super Tires",
        "description": "These tires are the very best",  
        "inStock": 5,
        "price": 4.99,
        "image": "/images/tires.jpg",
         "featured": false,
         "quantity": 0
    },
    {  
        "id": 2,  
        "name": "Reinforced Shocks",  
        "description": "Shocks made from kryptonite",  
        "inStock": 4,
        "price": 9.99,
        "image": "/images/shocks.jpg", 
         "featured": true,
         "quantity": 0
    },
    {  
        "id": 3,  
        "name": "PADDED SEATS",  
        "description": "Super soft seat for a smooth ride",  
        "inStock": 0,
        "price": 24.99,
        "image": "/images/seats.jpg",
         "featured": false,
         "quantity": 0
    }]