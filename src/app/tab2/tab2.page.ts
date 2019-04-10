import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  allPosts = [];

  constructor(private dataSrv: DataService){
    this.allPosts = this.dataSrv.getAllPosts();
    console.log(this.allPosts);
  }
}
