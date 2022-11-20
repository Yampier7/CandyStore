import { Product } from './../../models/product';
import { ConsultService } from './../../services/consult.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Consult } from './../../models/consult';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {

  displayedColumns = ['product', 'category','precio'];
  dataSource: MatTableDataSource<Product>;

  form: FormGroup;
  @ViewChild('tab') tabGroup: MatTabGroup;

  constructor(private productServices:ProductService) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      categoria: new FormControl(),
      title: new FormControl(),
    });
  }

  search() {
    if (this.tabGroup.selectedIndex == 0) {
      let categoria = this.form.value['categoria'];
      let title = this.form.value['title'];

      this.productServices
        .searchOthers(categoria, title)
        .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
    }else{
      let categoria = this.form.value['categoria'];
      let title = this.form.value['title'];
      this.productServices
      .searchOthers(categoria, title)
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
    }
  }
}
