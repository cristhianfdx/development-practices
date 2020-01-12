// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { format } from 'date-fns';

// class ReportDate {
//   year: string;
//   month: string;
// }

// const allMonths = () => {
//   const MONTHS = new Map();
//   MONTHS.set(1, 'Enero');
//   MONTHS.set(2, 'Febrero');
//   MONTHS.set(3, 'Marzo');
//   MONTHS.set(4, 'Abril');
//   MONTHS.set(5, 'Mayo');
//   MONTHS.set(6, 'Junio');
//   MONTHS.set(7, 'Julio');
//   MONTHS.set(8, 'Agosto');
//   MONTHS.set(9, 'Septiembre');
//   MONTHS.set(10, 'Octubre');
//   MONTHS.set(11, 'Noviembre');
//   MONTHS.set(12, 'Diciembre');

//   return MONTHS;
// };

// @Component({
//   selector: 'app-date',
//   templateUrl: './date.component.html',
//   styleUrls: ['./date.component.scss']
// })
// export class DateComponent implements OnInit {
//   form: FormGroup;
//   years: any[] = [];
//   months: any[] = [];
//   currentDate: Date;
//   isYearSelected = false;

//   constructor(private fb: FormBuilder) {
//     this.currentDate = new Date('2020/02/28');
//     this.initForm();
//   }

//   ngOnInit() {
//     this.setAvailableYears();
//   }

//   private initForm(): void {
//     this.form = this.fb.group({
//       year: [null, Validators.required],
//       month: [null, Validators.required]
//     });
//   }

//   submit($event: Event): void {
//     const date: ReportDate = new ReportDate();
//     date.year = this.form.get('year').value;
//     date.month = this.form.get('month').value;

//     console.log(
//       this.getFormatDate(
//         date.year,
//         date.month,
//         this.getDaysInMonth(date.year, date.month),
//         'yyyy/MM/dd'
//       )
//     );
//     this.form.reset();
//     this.isYearSelected = false;
//     $event.preventDefault();
//   }

// setAvailableYears(): void {
//   const PREVIOUS_YEARS_LIMIT  = 2;
//   for (let index = 0; index <= PREVIOUS_YEARS_LIMIT; index++) {
//     this.years.push(this.getCurrentYear() - index);
//   }
// }

//   setMonths(selectedYear: any): void {
//     const currentMonth = this.currentDate.getMonth() + 1;

//     allMonths().forEach((monthName, monthNumber) => {
//       if (
//         this.isValidYear(selectedYear) ||
//         this.isValidMonth(monthNumber, currentMonth) ||
//         this.isValidDay(selectedYear, monthNumber)
//       ) {
//         this.months = [
//           ...this.months,
//           { value: monthNumber, label: monthName }
//         ];
//       }
//     });
//   }

//   getDaysInMonth(year: any, month: any, date = 0): number {
//     return new Date(year, month, date).getDate();
//   }

//   getCurrentYear(): number {
//     return this.currentDate.getFullYear();
//   }

//   yearOptionChange($event: Event) {
//     const eventTarget = $event.target as HTMLInputElement;
//     this.isYearSelected = true;
//     this.months = [];
//     this.setMonths(eventTarget.value);
//   }

//   isValidDay(selectedYear: any, currentMonth: any): boolean {
//     return (
//       this.currentDate.getDate() ===
//       this.getDaysInMonth(selectedYear, currentMonth)
//     );
//   }

//   isValidMonth(month: any, currentMonth: any): boolean {
//     return month < currentMonth;
//   }

//   isValidYear(selectedYear: any): boolean {
//     return selectedYear < this.getCurrentYear();
//   }

//   getFormatDate(year: string, month: string, day: any, pattern: string): string {
//     return format(new Date(`${year}/${month}/${day}`), pattern);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { format } from 'date-fns';

import { ReportDate, Month } from '../models/report-date';
import { ReportDateService } from '../services/report-dates.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  form: FormGroup;
  years: string[] = [];
  months: Month[] = [];
  isYearSelected = false;

  constructor(private fb: FormBuilder, private reportDateService: ReportDateService ) {
    this.initForm();
  }

  ngOnInit() {
    this.years = this.reportDateService.setAvailableYears();
  }

  private initForm(): void {
    this.form = this.fb.group({
      year: [null, Validators.required],
      month: [null, Validators.required]
    });
  }

  submit($event: Event): void {
    const date: ReportDate = new ReportDate();
    date.year = this.form.get('year').value;
    date.month = this.form.get('month').value;

    console.log(
      this.getFormatDate(
        date.year,
        date.month,
        this.reportDateService.getDaysInMonth(date.year, date.month),
        'yyyy/MM/dd'
      )
    );
    this.form.reset();
    this.isYearSelected = false;
    $event.preventDefault();
  }

  yearOptionChange($event: Event) {
    const eventTarget = $event.target as HTMLInputElement;
    this.isYearSelected = true;
    this.months = this.reportDateService.setAvailableMonths(eventTarget.value);
  }

  getFormatDate(year: any, month: any, day: number, pattern: string): string {
    return format(new Date(`${year}/${month}/${day}`), pattern);
  }
}

