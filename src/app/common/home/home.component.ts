import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/class/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroList: Hero[] = [];

  constructor(hService: HeroService) {
    this.heroList = hService.getAll();
  }

  ngOnInit(): void {
  }

}
