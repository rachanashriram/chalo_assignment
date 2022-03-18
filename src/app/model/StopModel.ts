export class StopModel {
    id: number;
    name: string;
    lat: any;
    lng: any;

    constructor(id: number,
        name: string,
        lat: any,
        lng: any) {
        this.id = id;
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
}