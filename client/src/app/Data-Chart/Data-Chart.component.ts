import { Component, OnInit } from "@angular/core";
import { HistoricalService } from "../services/Historical.service";
import { Router } from "@angular/router";

interface historicalData {
  user: String;
  year: number;
  month: String;
  totalExpended: Number;
  totalWasted: Number;
}

@Component({
  selector: "app-Data-Chart",
  templateUrl: "./Data-Chart.component.html",
  styleUrls: ["./Data-Chart.component.css"]
})
export class DataChartComponent implements OnInit {
  constructor(
    public historicalService: HistoricalService,
    public router: Router
  ) {}
  historical: Array<historicalData>;
  showChart: boolean = false;
  year: number = 2017;
  years: Array<String> = ["2017", "2018"];
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
  public barChartLabels: String[] = [];
  public barChartType: string = "bar";
  public barChartLegend: boolean = true;

  public barChartData: any[] = [];

  refreshYear(yearSelected) {
    this.changeChart();
    this.barChartData = [];
    this.barChartLabels = [];
    this.showChart = false;
    this.year = parseInt(yearSelected);

    this.barChartData = this.getData();
    this.barChartLabels = this.getLabels();
   
   
  }
  getLabels() {
    this.historical.forEach(e => {
      if (this.year === e.year) {
        this.barChartLabels.push(e.month);
      }
    });

    this.showChart = true;
    console.log(this.barChartLabels)
    return this.barChartLabels;
  }

  getData() {
    let totalExpendedArr = [];
    this.historical.forEach(e => {
      if (this.year === e.year) {
        totalExpendedArr.push(e.totalExpended);
      }
    });

    let totalWastedArr = [];
    this.historical.forEach(e => {
      if (this.year === e.year) {
        totalWastedArr.push(e.totalWasted);
      }
    });

    this.barChartData = [
      { data: totalExpendedArr, label: "Expended" },
      { data: totalWastedArr, label: "Wasted" }
    ];
    console.log(this.barChartData);
    return this.barChartData;
  }

  goHistorical() {
    this.router.navigate(["/historical/detail"]);
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public changeChart(): void {
    this.barChartType = this.barChartType === "line" ? "bar" : "line";
    // this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
}
