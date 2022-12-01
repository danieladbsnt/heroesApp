import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})

export class HeroeCardComponent implements OnInit {

@Input() heroes: Heroe[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
