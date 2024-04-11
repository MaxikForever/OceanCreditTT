import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';


@Component({
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  public chartType: ChartType = 'line';

  public chartData: ChartConfiguration['data'] = {
    datasets: [
      // Your datasets here. For simplicity, we'll assume one dataset.
      {
        data: [/* Your data points, e.g., [65, 59, 80, 81, 56, 55, 40] */],
        label: 'Sample Dataset', // Optional
        // include any other dataset properties you need, such as backgroundColor, borderColor, etc.
      },
    ],
    labels: [/* Your x-axis labels, e.g., ['January', 'February', 'March', 'April', 'May', 'June', 'July'] */]
  };


  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Cubic interpolation mode'
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: -10,
        suggestedMax: 200
      }
    }
  };

}
