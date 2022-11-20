import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  chart: any;

  constructor(private productServices:ProductService,
    public route: ActivatedRoute,) { 
    Chart.register(...registerables);}

  ngOnInit(): void {
   this.draw();
  }

  draw() {
    this.productServices.callProcedureOrFunction().subscribe((data) => {
      let category = data.map((x) => x.category);
      let cantidad = data.map((x) => x.cantidad);

      this.chart = new Chart('canvas-bar', {
        type: 'bar',
        data: {
          labels: category,
          datasets: [
            {
              label: 'Cantidad',
              data: cantidad,
              borderColor: '#3cba9f',

              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
            },
          ],
        },
      });
    });
  }
}
