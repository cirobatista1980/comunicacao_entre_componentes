import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Hero } from 'src/app/hero.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnDestroy {
  @Input() nomeBehaviorSubject: BehaviorSubject<Hero>;
  nomeBehaviorSubjectSubscription: Subscription;
  hero: Hero;
  nomeCount=0;

  constructor(
  ) { }
  ngOnDestroy(): void {
    if (this.nomeBehaviorSubjectSubscription)
      this.nomeBehaviorSubjectSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.nomeBehaviorSubjectSubscription = this.nomeBehaviorSubject.subscribe(valor => {
      this.nomeCount++;
      this.hero = valor;
      console.log(this.hero);
    });
  }


}
