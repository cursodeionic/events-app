import { Event } from './../../models/Event';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events: Event[];
  constructor(private navCtrl: NavController, private ApiProvider:ApiProvider) { }

  ionViewDidLoad(){
    this.ApiProvider.getEvents().subscribe(
      data => {
        this.events = data;
      }
    );
  }
}
