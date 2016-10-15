"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var racing_data_service_1 = require('../services/racing-data.service');
var CarPartComponent = (function () {
    function CarPartComponent(racingDataService) {
        this.racingDataService = racingDataService;
        this.title = "Ultra Racing";
    }
    CarPartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.racingDataService.getCarParts().subscribe(function (carParts) { return _this.carParts = carParts; });
    };
    CarPartComponent.prototype.totalCarParts = function () {
        var sum = 0;
        if (Array.isArray(this.carParts)) {
            for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
                var carPart = _a[_i];
                sum += carPart.inStock;
            }
        }
        return sum;
    };
    CarPartComponent.prototype.upQuantity = function (carPart) {
        if (carPart.quantity < carPart.inStock)
            carPart.quantity++;
        if (carPart.inStock == 0)
            alert("Out of stock !!! Can't be added quantity");
    };
    CarPartComponent.prototype.downQuantity = function (carPart) {
        if (carPart.quantity > 0)
            carPart.quantity--;
        if (carPart.quantity == 0)
            alert("There's no items already!!!");
    };
    CarPartComponent.prototype.checkValidQuantity = function (carPart) {
        var regex = /^\d+$/;
        var quantity = regex.exec(carPart.quantity);
        if (quantity == null) {
            carPart.quantity = null;
            return;
        }
        if (carPart.quantity > carPart.inStock) {
            carPart.quantity = null;
        }
        else if (carPart.quantity < 0) {
            carPart.quantity = null;
        }
    };
    CarPartComponent = __decorate([
        core_1.Component({
            selector: 'car-part',
            templateUrl: 'app/carpart/carpart.component.html',
            // E2:directives
            styleUrls: ['app/carpart/carpart.style.css']
        }), 
        __metadata('design:paramtypes', [racing_data_service_1.RacingDataService])
    ], CarPartComponent);
    return CarPartComponent;
}());
exports.CarPartComponent = CarPartComponent;
//# sourceMappingURL=carpart.component.js.map