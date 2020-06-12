import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../../../@core/mock/products.service';
import {Product} from '../../tables/product/product';
@Component({
  selector: 'ngx-icons',
  styleUrls: ['./icons.component.scss'],
  templateUrl: './icons.component.html',
})
export class IconsComponent {
  model2:any={};
  msg:any="";
  model:any={};

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
  }

  get product(): Array<Product> {
    return this.productsService.product;
  }

  destroyproduct() {
    this.productsService.delete(this.product).then(() => {
      return this.product;
      this.msg = "Record is successfully deleted..... "; 
    });

  }

  add(){
    this.product.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... "; 

  }

  delete(i){
    this.product.splice(i,1);
    this.msg = "Record is successfully deleted..... ";
    
  }

  myValue;
  edit(p){
    this.model2.Id = this.product[p].Id;
    this.model2.Name = this.product[p].Name;
    this.model2.Date_of_production = this.product[p].Date_of_production;
    this.model2.Quantity_of_stock = this.product[p].Quantity_of_stock;
    this.model2.Quantity_produced = this.product[p].Quantity_produced;
    this.model2.Reviews = this.product[p].Reviews;
    this.myValue = p;
  
  }
  update(){
    let p= this.myValue;
    for(let i=0; i<this.product.length;i++){
      if(i==p){
        this.product[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

  }
  clickMe(){
    this.msg = "";
  }
}
