import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  getDrink(event) {
    const bebida = event.target.value;
    this.valueSearch.emit(bebida);
  }
}
