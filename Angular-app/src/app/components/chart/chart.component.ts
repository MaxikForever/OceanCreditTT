import { Component, ViewChild, ElementRef, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Chart from 'chart.js/auto';

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
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: '',
            data: [2.5, 1.4, 6, 4],
            backgroundColor: "rgba(190, 207, 255, 0.5)", // Adjust opacity to match screenshot
            borderColor: "rgb(41, 98, 255)",
            fill: true,
            tension: 0.3, 
            pointRadius: 0,
            pointHitRadius: 10, 
            pointHoverRadius: 10,
            pointHoverBorderWidth: 4, 
            pointHoverBackgroundColor: "rgb(41, 98, 255)", 
            pointHoverBorderColor: "#fff", 
          },
        ]
      },
      options: {
        responsive: true,
        interaction: {
          intersect: false,
          mode: 'index',
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true, 
            mode: 'index',
            position: 'nearest',
            callbacks: {
              label: function(context) {
                return `fb: ${context.parsed.y}`;
              }
            }
          }
        },
        scales: {
          y: {
            suggestedMax: 8,
            display: false,
            beginAtZero: false,
          },
          x: {
            grid: {
              display: false, 
            },
            ticks: {
              autoSkip: false,
            }
          }
        },
        elements: {
          line: {
            borderWidth: 6,
          },
          point: {
            radius: 0, 
          },
        }
      }
    });
    
  }
}
