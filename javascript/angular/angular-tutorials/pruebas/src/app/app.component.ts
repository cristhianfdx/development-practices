import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Observer, of, interval, pipe, Subject, from, BehaviorSubject } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, first, catchError, filter, multicast } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "pruebas";

  constructor() {}

  ngOnInit() {
    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // const subs = observable.subscribe({
    //   next: x => console.log('El siguiente valor es:', x),
    //   error: err => console.error('Error: ', err),
    //   complete: () => console.log('Suscripción completa')
    // });

    // subs.unsubscribe();

    // map((x: number) => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

    // first()(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

    // const observable = interval(1000 /* number of milliseconds */);

    // const obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
    //   map(userResponse => console.log('users: ', userResponse)),
    //   catchError(error => {
    //     console.log('error: ', error);
    //     return of(error);
    //   })
    // );

    // const subject = new Subject<number>();

    // subject.subscribe({
    //   next: v => console.log(`observerA: ${v}`)
    // });
    // subject.subscribe({
    //   next: v => console.log(`observerB: ${v}`)
    // });

    // subject.next(1);
    // subject.next(2);

    // const source = from([1, 2, 3]);
    // const subject = new Subject();
    // const multicasted = source.pipe(multicast(subject));

    // // These are, under the hood, `subject.subscribe({...})`:
    // multicasted.subscribe({
    //   next: v => console.log(`observerA: ${v}`)
    // });
    // multicasted.subscribe({
    //   next: v => console.log(`observerB: ${v}`)
    // });

    // This is, under the hood, `source.subscribe(subject)`:
    // multicasted.connect();

    const subject = new BehaviorSubject(0); // 0 is the initial value

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    subject.next(3);
  }

  ngOnDestroy() {}

  // discardOddDoubleEven() {
  //   return pipe(
  //     filter((v: number) => !(v % 2)),
  //     map(v => v + v)
  //   );
  // }
}
