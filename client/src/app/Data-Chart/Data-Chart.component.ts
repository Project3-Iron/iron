import { Component, OnInit } from "@angular/core";
import { HistoricalService } from "../services/Historical.service";
import { Router } from "@angular/router";

interface historicalData {
  user: String;
  year: Number;
  month: Number;
  totalExpended: Number;
  totalWasted: Number;
}

@Component({
  selector: "app-Data-Chart",
  templateUrl: "./Data-Chart.component.html",
  styleUrls: ["./Data-Chart.component.css"]
})
export class DataChartComponent implements OnInit {
  constructor(public historicalService: HistoricalService, public router: Router) {}
  historical: Array<historicalData>;
  showChart: boolean = false;
  ngOnInit() {
    this.historicalService.getHistoricalData().subscribe(historical => {
      this.historical = historical;
      this.barChartData = this.getData();
      this.barChartLabels = this.getLabels();
    });
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: Number[] = [];
  public barChartType: string = "bar";
  public barChartLegend: boolean = true;

  public barChartData: any[] = [];

  getLabels() {
    this.historical.forEach(e => {
      this.barChartLabels.push(e.month);
    });
    this.showChart = true;
    return this.barChartLabels;
  }

  getData() {
    let totalExpendedArr = [];
    this.historical.forEach(e => {
      totalExpendedArr.push(e.totalExpended);
    });

    let totalWastedArr = [];
    this.historical.forEach(e => {
      totalWastedArr.push(e.totalWasted);
    });

    this.barChartData = [{ data: totalExpendedArr, label:"Gastado"}, { data: totalWastedArr, label:"Desperdiciado" }];
    return this.barChartData;
  }

    goHistorical() {
      this.router.navigate(['/historical/detail']);
    }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public changeChart():void {
    this.barChartType = this.barChartType === 'line' ? 'bar' : 'line';
   // this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

}
