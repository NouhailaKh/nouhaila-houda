import {Component, OnInit} from '@angular/core';
import {MaterialRawService} from '../../../@core/mock/dialog.service';
import {MaterialRaw} from '../../modal-overlays/dialog/dialog';

@Component({
    selector: 'ngx-search-fields',
    templateUrl: 'search-fields.component.html',
})
export class SearchComponent implements OnInit {
  msg:any="";
  constructor(private materialrawService: MaterialRawService) {
  }
  ngOnInit(): void {
  }
  get materialraws(): Array<MaterialRaw> {
    return this.materialrawService.materialraws ;
  }
  destroymaterialraws(materialraw) {
    this.materialrawService.delete(this.materialraws).then(() => {
      return this.materialraws;
    });
  }
  delete(i){
    this.materialraws.splice(i,1);
    this.msg = "Record is successfully deleted..... ";
    
  }
  clickMe(){
    this.msg = "";
  }
}
