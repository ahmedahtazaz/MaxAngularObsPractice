import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  obsSub: Subscription;
  customInterval: Observable<number> = Observable.create(observer => {
    let count = 0;
    setInterval(
      () => {
        observer.next(++count);
      }
    , 1000);
  });

  constructor() { }

  ngOnDestroy(): void {
    this.obsSub.unsubscribe();
  }

  ngOnInit() {
    this.obsSub = this.customInterval.subscribe(count => console.log(count));
  }



}
