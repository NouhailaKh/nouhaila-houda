import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from 'app/@theme/theme.module';
import { MatierePremiereRoutingModule , routedComponents } from './matiere-premiere-routing.module';



@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    MatierePremiereRoutingModule,
    Ng2SmartTableModule,

  ],
  declarations: [ ...routedComponents ,
  ],
})
export class MatierePremiereModule { }
