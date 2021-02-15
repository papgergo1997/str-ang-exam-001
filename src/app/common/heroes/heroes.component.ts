import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/class/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  filterKey: string = '';
  heroList: Hero[] = [];

  constructor(hService: HeroService) {
    this.heroList = hService.getAll();
  }

  ngOnInit(): void {
  }

}
