import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PixieHighchartsModule, HighchartsStatic } from 'pixie-highcharts';

export function highchartsFactory() {
  const hc = require('highcharts');
  const hs = require('highcharts/modules/stock'); // for highstock
  const exp = require('highcharts/modules/exporting'); // for export as image & pdf
  const expd = require('highcharts/modules/export-data'); // for export data like csv

  hs(hc);
  exp(hc);
  expd(hc);

  return hc;
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PixieHighchartsModule,
    HighchartsStatic,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
