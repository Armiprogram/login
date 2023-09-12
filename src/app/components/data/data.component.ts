import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  data: any;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}