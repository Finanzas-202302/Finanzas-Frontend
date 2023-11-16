import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SharedDataService } from '../../../shared/shared-data.service';

@Component({
  selector: 'app-calculateview3',
  templateUrl: './calculateview3.component.html',
  styleUrls: ['./calculateview3.component.css'],
})
export class Calculateview3Component {
  calculate() {
    throw new Error('Method not implemented.');
  }
  prevStep() {
    this.router.navigate(['/calculate2']);
  }
  data: any;
  constructor(private router: Router, private sharedData: SharedDataService) {
    this.data = this.sharedData.data.value;
    console.log(this.data);
  }
}
