import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/Product.service";

import { DeviceService } from "../services/Device.service";

interface product {
  name: String;
  brand: String;
  code: String;
  price: number;
  measure: String;
  dueDate: Date;
  insertDate: Date;
  category: string;
  quantity: Number;
  status: Boolean;
  ingredients: String;
  device: String;
}

@Component({
  selector: "app-Products-Chart",
  templateUrl: "./Products-Chart.component.html",
  styleUrls: ["./Products-Chart.component.css"]
})
export class ProductsChartComponent implements OnInit {
  public chartOptions: any = {
  //  scale: { ticks: { beginAtZero: true, min: 0, max: 30, stepSize: 10} }
  };
  constructor(
    public productService: ProductService,
    public deviceService: DeviceService
  ) {}
  

  devicesUser: Array<Object>;
  products: Array<product>;
  showChart: boolean = false;
 

  ngOnInit() {
    this.deviceService.getDevicesUser().subscribe(devices => {
      this.devicesUser = devices;
    });
  }

  seeGraph(id) {
    this.productService.getAllProducts(id).subscribe(products => {
      this.products = products;
      //console.log(products);
      this.showChart = false;
      this.initGraph();
    });
  }

  getData() {
    let a = { data: [], label: "Gasto" };
    this.radarChartLabels.forEach(category => {
      let sum = 0;
      this.products.forEach(product => {
        if (product.category === category) {
          sum += product.price;
        }
      });
      a.data.push(sum);
    });
    this.radarChartData.push(a);
    console.log(this.radarChartData);
    this.showChart = true;
  }

  public radarChartLabels: string[] = [
    "Meat",
    "Fish",
    "Fruit",
    "Vegetables",
    "Dairy",
    "Others"
  ];

  public radarChartData: any = [];
  public radarChartType: string = "pie";

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  //historical: Array<historicalData>;
  initGraph() {
    this.radarChartData = [];
    this.getData();
  }
}
