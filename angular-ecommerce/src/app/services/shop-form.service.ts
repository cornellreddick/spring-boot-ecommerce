import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ShopFormService {

  constructor() { }

  getCreditCardMonths(startMonth: number): Observable<number[]>{

    let data: number[] = [];

    // build an array for "Month" dropdown list
    // - start at current month and loop until

    for(let theMonth = startMonth; theMonth<=12: theMonth++) {
      data.push(theMonth)
    }

    return of(data);
  }

  getCreditCardYears(): Observable<number[]>{

    let data: number[] = [];
    // build an array for "Year"" dropdown list
    // - start at current year and loop for next 10 year

    const currentYear: number = new Date().getFullYear();
    const endYear: number = currentYear + 10;

    for (let theYear = currentYear; theYear<= endYear; theYear++){
      data.push(theYear);
    }

    return of(data);
  }

}













