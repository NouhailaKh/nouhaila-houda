import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../../../@core/mock/grid.service';
import {Provider} from '../grid/grid';

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./typography.component.scss'],
  templateUrl: './typography.component.html',
})
export class TypographyComponent implements OnInit {
  msg:any="";
  constructor(private providerService: ProviderService) {
  }

  ngOnInit(): void {
  }

  get providers(): Array<Provider> {
    return this.providerService.providers;
  }

  destroyproviders(provider) {
    this.providerService.delete(this.providers).then(() => {
      return this.providers;
    });
  }

  delete(i){
    this.providers.splice(i,1);
    this.msg = "Record is successfully deleted..... ";
    
  }
  clickMe(){
    this.msg = "";
  }
}
