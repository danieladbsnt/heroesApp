import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img {
      width: 75%;
      border-radius: 5px;
    }
    `]
})
export class AddComponent implements OnInit {


  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe =  {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  
  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
    .pipe(switchMap( ({id}) => this.heroesService.getHeroeById(id)))
    .subscribe( heroe => this.heroe = heroe );
  }

  save() {
    if(this.heroe.superhero.trim().length === 0) {
      return;
    } 
    
    if(this.heroe.id) {
      this.heroesService.updateHeroe(this.heroe)
      .subscribe(heroe => console.log('Actualizando', heroe))
    } else {
      this.heroesService.addHeroe(this.heroe)
      .subscribe(heroe => {
        this.router.navigate(['/heroes/edit', heroe.id])
    })
    }
  } 

  deleteHero() {
    this.heroesService.deleteHeroe(this.heroe.id!)
    .subscribe(resp => {
      this.router.navigate(['/heroes']);
    })
  }
}
