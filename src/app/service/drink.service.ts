import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  url: string;
      constructor(private http: HttpClient) {
        this.url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
        console.log(this.url);
       }

       detais(idDrink: string): Promise<any> {
        return this.http.get(`${this.url}/drinks/${idDrink}`).toPromise();
       }

       buscarDrink(strDrink: string): Promise<any> {
       return this.http.get(`${this.url}&query=${strDrink}`).toPromise();

    }
  }
