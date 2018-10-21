import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('labels') pieChartLabels: string[] = [];
  @Input('data') pieChartData: number[] = [];
  @Input('chartType') pieChartType: string = '';
  @Input() leyenda: string;

  constructor() { }

  ngOnInit() {
  }

}
