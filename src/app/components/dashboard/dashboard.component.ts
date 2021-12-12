import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(private stockService: StocksService) {
    this.symbols = stockService.get();
  }

  ngOnInit() {
    this.readStockData();
  }

  readStockData() {
    this.stockService
      .load(this.symbols)
      .subscribe((stocks) => (this.stocks = stocks));
  }
}
