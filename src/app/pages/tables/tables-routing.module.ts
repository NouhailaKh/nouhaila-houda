import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { ProductComponent } from './product/product.component';
import { TreeGridComponent} from './tree-grid/tree-grid.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'product',
      component: ProductComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  ProductComponent,
  TreeGridComponent,
];
