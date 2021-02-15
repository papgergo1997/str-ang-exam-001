import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigTableService {

  tableCols: ITableCol[] = [
    { key: "id", text: "#" },
    { key: "name", text: "Name" },
    { key: "superPower", text: "SuperPower" },
    { key: "address", text: "Address" }
  ]

  constructor() { }

  getAll() {
    return this.tableCols;
  }
}