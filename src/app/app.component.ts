import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  months = [
    { value: 1, name: 'January' },
    { value: 2, name: 'February' },
    { value: 3, name: 'March' },
    { value: 4, name: 'April' },
    { value: 5, name: 'May' },
    { value: 6, name: 'June' },
    { value: 7, name: 'July' },
    { value: 8, name: 'August' },
    { value: 9, name: 'September' },
    { value: 10, name: 'October' },
    { value: 11, name: 'November' },
    { value: 12, name: 'December' },
  ];

  selectedMonth: number = 1;

  onMonthChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedMonth = Number(target.value); // Convert the value to a number
    console.log('Selected month:', this.selectedMonth);
  }

  type = 'line';
  zoomType = 'x';
  data = [
    {
      name: 'OMAK-C',
      data: [
        { x: 1512691300000, y: 2.787037037037037, equipmentName: 'OMAK-C' },
        { x: 1512691400000, y: 61.638888888888886, equipmentName: 'OMAK-C' },
        { x: 1512691500000, y: 56.97222222222222, equipmentName: 'OMAK-C' },
        { x: 1512692200000, y: 67.7962962962963, equipmentName: 'OMAK-C' },
        { x: 1512693200000, y: 58.2037037037037, equipmentName: 'OMAK-C' },
      ],
    },
  ];
  xAxis = { title: { text: 'Sample X-Axis' }, type: 'datetime' };
  yAxis = { title: { text: 'Sample Y-Axis' } };
  footer = 'Sample Footer';
  color = ['rgb(23,119,25)'];
  tooltip = {
    formatter: function () {
      return `<span style="font-size:10px">${this.series.chart.time.dateFormat(
        '%A, %b %d, %Y %H:%M:%S',
        this.key
      )}
      </span><table style="margin-bottom:unset"><tr>
      <td style="color:${this.color};padding:0">
        ${this.point.equipmentName}</td><td style="padding:0"> : </td>
        <td style="padding:0"><b>${this.y.toFixed(2)}</b></td></tr></table>`;
    },
    useHTML: true,
  };
  exporting = { title: 'Testing', filename: 'Test', scale: 3 };
  config = {
    legend: {
      align: 'center',
      verticalAlign: 'top',
      maxHeight: 40,
      x: 0,
      y: 3,
      borderWidth: 1,
      borderRadius: 3,
      itemMarginTop: 2,
      padding: 5,
      navigation: { style: { color: '#FFFFFF' }, activeColor: '#039BD5' },
      // itemStyle: { color: "#E0E0E3", fontWeight: "normal" },
      itemHoverStyle: { color: '#FFF' },
      itemHiddenStyle: { color: '#606063' },
    },
  };

  load = '(Nothing)';
  chartInstance;
  loaded = false;
  constructor() {}

  ngOnInit() {}

  onLoad(e) {
    this.loaded = true;
    this.chartInstance = e;
    console.log(this.chartInstance);

    this.load = JSON.stringify(e.options);
  }
}
