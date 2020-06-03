import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../../../@core/mock/grid.service';
import {Provider} from './grid';

@Component({
  selector: 'ngx-grid',
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {
constructor(private providerService: ProviderService ) {
}
ngOnInit(): void {
}
  public save() {
    this.providerService.save() ;
  }

  get provider(): Provider {
    return this.providerService.provider ;
  }
}
