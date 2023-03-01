import { Component, ViewEncapsulation } from '@angular/core';
import * as chartData from '../../../shared/data/charts/chartjs';
import { ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
})
export class ChartjsComponent {
  // barChart
  public barChartOptions = chartData.barChartOptions;
  public barChartLabels = chartData.barChartLabels;
  public barChartType = chartData.barChartType;
  public barChartLegend = chartData.barChartLegend;
  public barChartData = chartData.barChartData;
  public barChartColors = chartData.barChartColors;

  // lineGraph Chart
  public lineGraphOptions = chartData.lineGraphOptions;
  public lineGraphLabels = chartData.lineGraphLabels;
  public lineGraphType = chartData.lineGraphType;
  public lineGraphLegend = chartData.lineGraphLegend;
  public lineGraphData = chartData.lineGraphData;

  // radarGraph Chart
  public radarGraphOptions = chartData.radarGraphOptions;
  public radarGraphLabels = chartData.radarGraphLabels;
  public radarGraphType = chartData.radarGraphType;
  public radarGraphLegend = chartData.radarGraphLegend;
  public radarGraphData = chartData.radarGraphData;
  public radarGraphColors = chartData.radarGraphColors;

  // lineChart
  public lineChartData = chartData.lineChartData;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartColors = chartData.lineChartColors;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartType = chartData.lineChartType;

  // Doughnut
  public doughnutChartLabels = chartData.doughnutChartLabels;
  public doughnutChartData = chartData.doughnutChartData;
  public doughnutChartType = chartData.doughnutChartType;
  public doughnutChartColors = chartData.doughnutChartColors;
  public doughnutChartOptions = chartData.doughnutChartOptions;

  // polarareaChart
  public polarareaChartLabels = chartData.doughnutChartLabels;
  public polarareaChartData = chartData.doughnutChartData;
  public polarareaChartType = chartData.doughnutChartType;
  public polarareaChartColors = chartData.doughnutChartColors;
  public polarareaChartOptions = chartData.doughnutChartOptions;
  public polarareaChartLegend = chartData.lineChartLegend;

  public polarAreaChartLabels: String[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales',
  ];
  public polarAreaChartData: String[] = ['300', '500', '100', '40', '120'];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent | any;
    active?: {}[] | any;
  }): void {}

  public chartHovered({ event, active }: { event: any; active: any }): void {}
}
