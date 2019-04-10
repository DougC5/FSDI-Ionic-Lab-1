import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pageTitle = 'Home Page';
  postText: string;

  constructor(public dataSrv: DataService ) {
    console.log('Home Constructor exc');
  }

  create() {
    console.log('inside the crete function');
    console.log(this.postText);
    this.dataSrv.addPost(this.postText);
    // get text from input
    // add it to an array on a service
    this.postText = '';
  }

}
