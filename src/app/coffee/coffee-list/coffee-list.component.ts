import { CafeService } from './../cafe.service';
import { Component, OnInit } from '@angular/core';
import { Cafe, CafeTypes } from '../Cafe';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  cafeList: Array<Cafe> = [];
  totalCafeOrigen?: number;
  totalCafeBlend?: number;

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.getListCafe();
    this.getTotals();
  }

  getListCafe(): void {
    this.cafeService.getCafeList().subscribe((list) => {
      this.cafeList = list;
      this.getTotals()
    });
  }

  getTotals():void {
    console.log('lista', this.cafeList)
    this.totalCafeBlend = this.cafeList.filter( c=> c.tipo === CafeTypes.BLENDED).length;
    this.totalCafeOrigen = this.cafeList.filter( c=> c.tipo === CafeTypes.ORIGEN).length;
  }
}


