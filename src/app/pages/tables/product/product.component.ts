import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../@core/mock/products.service';
import {Product} from './product';

@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }
  public save() {
  this.productsService.save() ;
  }

  get products(): Product {
  return this.productsService.products ;
  }
}
