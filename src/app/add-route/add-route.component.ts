import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StopModel } from '../model/StopModel';

import stops from '../../stops.json';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {

routeForm:any = {
  name: "",
  direction: "",
  active: true,
  start: null,
  end: null,
  stops: []
};

stopList: StopModel[] = [];
availStopList: StopModel[] = [];

directions = ["UP", "DOWN"];

  constructor() { 
    
    this.stopList = stops;
  }

  ngOnInit(): void {
    this.routeForm = new FormGroup({
      name: new FormControl(this.routeForm.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      direction: new FormControl(this.routeForm.direction, Validators.required),
      active: new FormControl(this.routeForm.active),
      start: new FormControl(this.routeForm.start, Validators.required),
      end: new FormControl(this.routeForm.end, Validators.required),
      stops: new FormControl(this.routeForm.stops)
    });

    this.stopList.forEach(e => this.availStopList.push(e));

  }

  get f(){
    return this.routeForm.controls;
  }

  onChooseStop(event:any){
    console.log(event.target.value);
  }

  submit(){
    console.log(this.routeForm.value);
  }

}
