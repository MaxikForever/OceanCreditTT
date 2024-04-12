import { Component, ViewChild, ElementRef, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Chart from 'chart.js/auto'; // Ensure this import is correct for your Chart.js version

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('mychart', { static: false }) mychart!: ElementRef<HTMLCanvasElement>;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initializeChart();
    }
  }

  private initializeChart(): void {
    const ctx = this.mychart.nativeElement.getContext('2d');
    if (!ctx) {
      return console.error('Unable to get canvas context');
    }
    console.log('Initializing chart with context', ctx);

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["January 2019", "February 2019", "March 2019", "April 2019"],
        datasets: [
          {
            label: 'Current Value',
            data: [0, 20, 40, 50],
            backgroundColor: "rgba(115, 125, 231, 0.55)",
            borderColor: "#006ee5",
            fill: true
          },
          {
            label: 'Invested Amount',
            data: [0, 20, 40, 60, 80],
            backgroundColor: "#442ee3",
            borderColor: "#442ee3",
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    console.log('Chart initialized', chart);
  }
}
