import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../service/drink.service';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  [x: string]: any;
  bebidas = [];

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
  }

  getDrink(event) {
    const bebida = event;
    this.drinkService.buscarDrink(bebida).then(res => {
      this.bebidas = res.drinks;
      console.log(res);
    });
  }

}
