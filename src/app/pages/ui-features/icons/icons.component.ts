import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../../../@core/mock/products.service';
import {Product} from '../../tables/product/product';
@Component({
  selector: 'ngx-icons',
  styleUrls: ['./icons.component.scss'],
  templateUrl: './icons.component.html',
})
export class IconsComponent implements OnInit {

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
  }

  get product(): Array<Product> {
    return this.productsService.product;
  }

  destroyproduct(product) {
    this.productsService.delete(this.product).then(() => {
      return this.product;
    });

  }
}
