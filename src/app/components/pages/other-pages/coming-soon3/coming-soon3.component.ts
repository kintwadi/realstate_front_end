import { Component } from '@angular/core';

@Component({
    selector: 'app-coming-soon3',
    imports: [],
    templateUrl: './coming-soon3.component.html',
    styleUrls: ['./coming-soon3.component.scss']
})
export class ComingSoon3Component {

  public seconds: number;
  public interval;
  public year = new Date().getFullYear()

  constructor() {
    this.interval = setInterval(function (this: any) {
      let currentDate = new Date();
      currentDate.setHours(0);  // Set the desired hours
      currentDate.setMinutes(0); // Set the desired minutes
      currentDate.setSeconds(0);

      let nowDate = new Date();
      let daysToAdd = 7;
      currentDate.setDate(currentDate.getDate() + daysToAdd);
      let distance = currentDate.getTime() - nowDate.getTime();

      this.document.querySelectorAll('#days').forEach((element: { innerHTML: number }) => {
          element.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
        });

      this.document.querySelectorAll('#hours').forEach((element: { innerHTML: number }) => {
          element.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        });

      this.document.querySelectorAll('#minutes').forEach((element: { innerHTML: number }) => {
          element.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        });

      this.document.querySelectorAll('#seconds').forEach((element: { innerHTML: number }) => {
          element.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);});
    }, this.seconds);
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', '#5eac12');
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
