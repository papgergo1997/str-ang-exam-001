import { Injectable } from '@angular/core';
import { Hero } from '../class/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = [
    {
      id: 1,
      name: 'Batman',
      superPower: 'rich',
      address: 'Gotham city',
      image: 'batman'
    },
    {
      id: 2,
      name: 'Black bolt',
      superPower: 'lightning power',
      address: 'Blüdhaven',
      image: 'blackBolt'
    },
    {
      id: 3,
      name: 'Superman',
      superPower: 'laser eye',
      address: 'Washington DC',
      image: 'superman'
    },
    {
      id: 4,
      name: 'Arrow',
      superPower: 'rich',
      address: 'Starling City',
      image: 'arrow'
    },
    {
      id: 5,
      name: 'Flash',
      superPower: 'lightning speed',
      address: 'Star City',
      image: 'flash'
    },
    {
      id: 6,
      name: 'Concrete man',
      superPower: 'house building',
      address: 'Ózd Fatelep utca 6.',
      image: 'concrete'
    },

  ]

  constructor() { }

  getAll(): Hero[] {
    return this.heroes;
  }
}
