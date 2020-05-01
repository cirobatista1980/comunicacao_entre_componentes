import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  @Input() nomeBehaviorSubject: BehaviorSubject<string>;
  constructor() { }

  ngOnInit(): void {
  }

  enviarViaInput() {
    this.nomeBehaviorSubject.next('');
  }
}

