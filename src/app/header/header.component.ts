import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() valueSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pesquisarDrink(event) {
    const bebida = event.target.value;
    this.valueSearch.emit(bebida);
  }
}
