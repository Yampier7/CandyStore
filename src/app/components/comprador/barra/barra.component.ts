import { ActivatedRoute } from '@angular/router';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  chartBar: any;
  chartdoughnut: any;
  chart: any;

  constructor(
    private productService: ProductService,
    public route: ActivatedRoute,
  ) {Chart.register(...registerables);}

  ngOnInit(): void {
    this.getProducts();
   
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.processProductResponse(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  processProductResponse(resp: any) {
    const nameProduct: String[] = [];
    const account: number[] = [];

    let listCProduct = resp;
    console.log('listCProduct:', listCProduct);

    listCProduct.forEach((element: Product) => {
      nameProduct.push(element.title);
      account.push(element.account);
    });

    //nuestro gráfico de barras
    this.chartBar = new Chart('canvas-bar', {
      type: 'bar',
      data: {
        labels: nameProduct,
        datasets: [
          {
            label: 'Productos',
            data: account,
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],

            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
          },
        ],
      },
    });
    
    //nuestro gráfico de doughnut
    this.chartdoughnut = new Chart('canvas-doughnut', {
      type: 'doughnut',
      data: {
        labels: nameProduct,
        datasets: [
          {
            label: 'Productos',
            data: account,
            borderColor: '#3cba8f',

            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
          },
        ],
      },
    });
  }



}
