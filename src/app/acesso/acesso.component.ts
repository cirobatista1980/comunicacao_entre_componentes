import { Hero } from './../hero.model';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {
  nomeBehaviorSubjectPai = new BehaviorSubject<Hero>(new Hero())

  constructor() { }

  ngOnInit(): void {
  }

}
