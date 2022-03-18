import { ActivationEnd } from "@angular/router";
import { StopModel } from "./StopModel";

export class RouteModel {
    name: string;
    dir: string;
    id: number;
    isActive: boolean;
    stops: StopModel[];

    constructor(name: string,
        dir: string,
        id: number,
        isActive: boolean,
        stops: StopModel[]) {
        this.name = name;
        this.dir = dir;
        this.id = id;
        this.isActive = isActive;
        this.stops = stops;
    }

}