import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../service/drink.service';
import { Bebidas } from 'src/app/modal/bebidas.interface';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  [x: string]: any;
  list: Bebidas[];

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.drinkService.getData()
      .subscribe((drinks: any) => {
        this.list = drinks.drinks;
      });
  }

  pesquisarDrink(event) {
    const bebida = event;
    this.drinkService.buscarDrink(bebida).then(res => {
      this.list = res.drinks;
      console.log(res);
    });
  }

}
