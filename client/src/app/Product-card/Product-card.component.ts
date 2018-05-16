import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { WindowService } from "../services/Window.service";

@Component({
  selector: "app-Product-card",
  templateUrl: "./Product-card.component.html",
  styleUrls: ["./Product-card.component.css"]
})
export class ProductCardComponent implements OnInit {
  @Input() products;
  @Input() status;
  @Output() outGetItem: EventEmitter<any> = new EventEmitter();
  @Output() outGetDelete: EventEmitter<any> = new EventEmitter();

  showInfo :boolean =  false; 
  query: String = "";
  constructor(private windowService: WindowService) {}

  ngOnInit() {
   // console.log(this.products);
  }

  outInfo(product) {
    this.status = true;
    this.outGetItem.emit(product);
  }

  outDelete(product) {
    this.status = false;
    this.outGetDelete.emit(product);
  }

  buyProductAmazon(productName, productBrand) {
    this.query = `//www.amazon.es/s/ref=nb_sb_noss_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Dgrocery`;
    let keyWords = `&field-keywords=${productName}+${productBrand}`;
    this.windowService.nativeWindow.open(`${this.query}${keyWords}`);
  }


  buyProductECI(productName, productBrand) {
    this.query = `https://www.elcorteingles.es/supermarket/search/`
    let keyWords = `?term=${productName}+${productBrand}`;
    this.windowService.nativeWindow.open(`${this.query}${keyWords}`);

  }

  showMoreInfo(){
    this.showInfo = !this.showInfo; 
  }
}
