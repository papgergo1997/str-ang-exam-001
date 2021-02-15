import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/class/hero';
import { HeroService } from 'src/app/service/hero.service';
import { ConfigTableService, ITableCol } from 'src/app/service/table-config.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  sortKey: string = '';
  filterKey: string = '';
  heroList: Hero[] = [];
  cols: ITableCol[] = [];

  constructor(hService: HeroService, tService: ConfigTableService) {
    this.cols = tService.getAll();
    this.heroList = hService.getAll();
  }

  ngOnInit(): void {
  }

  onChangeSort(data: string): void {
    this.sortKey = data;
  }

}
