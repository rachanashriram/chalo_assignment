import { Component, OnInit } from '@angular/core';
import { StopModel } from '../model/StopModel';
import stops from '../../stops.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  latitude = 18.516726;
  longitude = 73.856255;
  stopId: number = 0;
  stopList: StopModel[] = [];

  constructor() {
    this.stopList = stops;
  }

  ngOnInit(): void {
  }

  onAddStop(event: any) {
    console.log(event);
  }

}
