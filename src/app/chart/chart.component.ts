import { Component, OnInit } from '@angular/core';
import { StockApiService } from '../stock-api.service'
import { get } from 'lodash';
//import { ChartDataInterface } from './state/chart-state';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  dailyTS: Object
  dailyTSString: string
  dailyTSParsed: JSON
  intraDayTS: Array<Object>
  text: string
  
// Our labels along the x-axis
years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];

// For drawing the lines
 africa = [86,114,106,106,107,111,133,221,783,2478]
 asia = [282,350,411,502,635,809,947,1402,3700,5267];
 europe = [168,170,178,190,203,276,408,547,675,734];
 latinAmerica = [40,20,10,16,24,38,74,167,508,784];
 northAmerica = [6,3,2,2,7,26,82,172,312,433];

  constructor(public _api: StockApiService) { }

  ngOnInit() {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public testData = [];

  public barChartData = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A'
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90], 
      label: 'Series B'
    }
  ];
  public barChartData2 = [
    {data: [], label: 'Series C'}
  ];
  public chartData = [];
  series: 'Time Series (Daily)'
  prop = '4. close'


  onClick() {
    
        
    this._api.getDailyTimeSeries().subscribe(
      (res: any)=>{
        this.dailyTS = res['Time Series (Daily)'];
        //console.log(res)
         //console.log(this.dailyTS)
         //console.log(Object.entries(this.dailyTS));
         //var as = JSON.parse(this.dailyTS);

        //const arr = Object.keys(this.dailyTS).map((key) => [key, this.dailyTS[key]]);
        let arr = Object.entries(this.dailyTS)
        console.log(arr[0]);
        
        for (var i in arr) {
          //console.log("x axis", arr[i])
          this.barChartLabels.push(arr[i][0])
          if (arr[i].hasOwnProperty) {
            
          //   //var val = this.dailyTS[i];
          //  // this.barChartData.push(arr[i][1])
           //   console.log("testing", arr[i][1]);
           //console.log("arr[i][1][this.prop]")
            //this.chartData.push(arr[i][this.prop])  
            //this.barChartData2['data'].push(parseInt(arr[i][1]['4. close']))
            this.barChartData[0].data.push(arr[i][1]['4. close'])
          }
        }
        console.log('type of an object', Object.prototype.toString.call(this.barChartData))
        // this.barChartData[0].data.push(this.chartData[1])
        console.log('testiruiu barcartdata',this.barChartData)
        console.log(this.chartData[1])
        console.log(this.chartData)
        //console.log("testing dailyts",arr[2][1][prop])
        //console.log("test data",this.testData)
       // var array = JSON.parse(this.testData[0]);
        //let test = array.split('"')
        //console.log("array", array)
       // var match = /close: \"\d+\"/.exec(arr[2][1]);
        //console.log(match ? "Got " + match : "No match");  
        // for (var key in this.dailyTS) {
        //   console.log("x values", this.dailyTS[key])
        //   if (this.dailyTS.hasOwnProperty(key)) {
        //     var val = this.dailyTS[key];
        //     //console.log(val);
            
        //   }
        // }
        
      }
    )
   

    for (let i = 1; i < 10; i++) {
      //this.dailyTS[i];
      console.log(this.dailyTS)
    }

    this._api.getIntraDayTimeSeries().subscribe(
      (res: any)=>{
        this.intraDayTS = res;
        // console.log(this.intraDayTS)
      }
    )

    
  }

}
