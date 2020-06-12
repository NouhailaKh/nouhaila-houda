import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../../../@core/mock/grid.service';
import {Provider} from './grid';

@Component({
  selector: 'ngx-grid',
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {
  msg:any="";
constructor(private providerService: ProviderService ) {
}
ngOnInit(): void {
}
  public save() {
    this.providerService.save() ;
    this.msg = "Record is successfully added..... "; 
  }

  get provider(): Provider {
    return this.providerService.provider ;
  }
  clickMe(){
    this.msg = "";
  }
}
