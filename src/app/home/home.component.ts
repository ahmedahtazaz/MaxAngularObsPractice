import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  intObs: Subscription;

  constructor() { }

  ngOnDestroy(): void {
    this.intObs.unsubscribe();
  }

  ngOnInit() {
    this.intObs = interval(1000).subscribe(
      count => console.log(count)
    );
  }



}
