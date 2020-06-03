import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../../../@core/mock/grid.service';
import {Provider} from '../grid/grid';

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./typography.component.scss'],
  templateUrl: './typography.component.html',
})
export class TypographyComponent implements OnInit {
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
}
