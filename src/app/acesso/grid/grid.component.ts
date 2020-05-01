import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnDestroy {
  @Input() nomeBehaviorSubject: BehaviorSubject<string>;
  nomeBehaviorSubjectSubscription: Subscription;

  nomeCount=0;

  constructor() { }
  ngOnDestroy(): void {
    if (this.nomeBehaviorSubjectSubscription)
      this.nomeBehaviorSubjectSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.nomeBehaviorSubjectSubscription = this.nomeBehaviorSubject.subscribe(valor => {
      this.nomeCount++;
    });
  }


}
