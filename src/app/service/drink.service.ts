import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Bebidas } from 'src/app/modal/bebidas.interface';


@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  url: string;
        constructor(private http: HttpClient) {
        this.url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
       }

       getData() {
        return this.http.get<Bebidas[]>(this.url)
       }

       detais(strDrink: string): Promise<any> {
        return this.http.get(`${this.url}/drinks/${strDrink}`).toPromise();
       }

       buscarDrink(strDrink: string): Promise<any> {
       return this.http.get(`${this.url}&query=${strDrink}`).toPromise();
    }
  }
