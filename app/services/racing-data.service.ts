import {Injectable} from '@angular/core';
import {CarPart} from '../carpart/carpart';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class RacingDataService{

    constructor(private http:Http){}

    getCarParts() {
        return this.http.get('app/carpart/carpart.json').map((r: Response) => r.json().data as CarPart[]);
    }
}