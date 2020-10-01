import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators'

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
        observer.next(count++);

        if(count > 3)
          observer.error(new Error('Count is greater than 3'));
      }
    , 1000);
  });

  constructor() { }

  ngOnDestroy(): void {
    this.obsSub.unsubscribe();
  }

  ngOnInit() {
    this.obsSub = this.getPipe().subscribe(data => console.log(data), error => console.log(error), () => console.log('completed'));
  }

  getPipe = () => {
    return this.customInterval.pipe(filter(
      data => data > 0
    ), map(
      data => {
        return 'Round '+(data + 1);
      }
    ));
  }
}
