import { Injectable } from '@angular/core';

import { MONTHS } from '../util/months';

@Injectable({
  providedIn: 'root'
})
export class ReportDateService {
  currentDate: Date;

  constructor() {
    this.currentDate = new Date('2020/03/31');
  }

  setAvailableYears(): any {
    const PREVIOUS_YEARS_LIMIT = 2;
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let index = 0; index <= PREVIOUS_YEARS_LIMIT; index++) {
      years.push(currentYear - index);
    }
    return [...years];
  }

  setAvailableMonths(selectedYear: any): any {
    const currentMonth = this.currentDate.getMonth() + 1;
    const months = [];

    MONTHS().forEach((monthName, monthNumber) => {
      if (this.isValidDate(selectedYear, monthNumber, currentMonth)) {
        months.push({ value: monthNumber, label: monthName });
      }
    });

    return [...months];
  }

  getDaysInMonth(year: number, month: number, date = 0): number {
    return new Date(year, month, date).getDate();
  }

  isValidDate(selectedYear: any, month: any, currentMonth: any): boolean {
    return (
      this.isValidYear(selectedYear) ||
      this.isValidMonth(month, currentMonth) ||
      (month === currentMonth &&
        this.isValidDay(selectedYear, month))
    );
  }

  isValidDay(selectedYear: number, month: number): boolean {
    console.log(
      this.currentDate.getDate(),
      this.getDaysInMonth(selectedYear, month)
    );
    return (
      this.currentDate.getDate() === this.getDaysInMonth(selectedYear, month)
    );
  }

  isValidMonth(month: number, currentMonth: number): boolean {
    return month < currentMonth;
  }

  isValidYear(selectedYear: number): boolean {
    return selectedYear < this.currentDate.getFullYear();
  }
}
