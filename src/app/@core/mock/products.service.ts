import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http' ;
import {Product} from '../../pages/tables/product/product' ;


@Injectable({
  providedIn: 'root' ,
})
export class ProductsService {
  private _products: Product ;
  private _product: Array<Product> ;
  model:any={};  

  constructor( private httpClient: HttpClient ) {
  
    this.product.push(
      new Product
    );    
  }

  get() {
    return new Promise(resolve => resolve(Product));
  }

public save() {
  this.product.push(this.products) ;
}
      get product(): Array<Product> {
    if (this._product == null) {
      this._product = new Array<Product>() ;
    }
    return this._product;
  }

  set product(value: Array<Product>) {
    this._product = value;
  }


  get products(): Product {
    if (this._products == null) {
      this._products = new Product();
    }
    return this._products;
  }
  delete(selected) {
    return new Promise(resolve => {
      const index = this.product.findIndex(product => product === selected);
      this.product.splice(index, 1);
      resolve(true);
    });
  }

  
  set products(value: Product) {
    this._products = value;
  }

  private clone(products: Product) {
  const myclone = new Product() ;
  myclone.Id = products.Id ;
  myclone.Name = products.Name ;
  myclone.Date_of_production = products.Date_of_production ;
  myclone.Quantity_of_stock = products.Quantity_of_stock ;
  myclone.Quantity_produced = products.Quantity_produced ;
  myclone.Reviews = products.Reviews ;
    return myclone ;
  }
}
