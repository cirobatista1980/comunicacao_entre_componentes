import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from 'src/app/hero.model';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  @Input() nomeBehaviorSubject: BehaviorSubject<Hero>;
  hero:Hero;
  constructor() {
    this.hero = new Hero();
   }

  ngOnInit(): void {
  }

  enviarViaInput() {
    this.nomeBehaviorSubject.next(this.hero);
  }
}

