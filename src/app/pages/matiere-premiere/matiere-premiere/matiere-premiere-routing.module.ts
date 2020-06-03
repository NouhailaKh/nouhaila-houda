import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatierePremiereComponent } from 'app/pages/matiere-premiere/matiere-premiere.component';

import { CompComponent } from './comp/comp.component';

import { ComponentComponent } from './component/component.component';

const routes: Routes = [{
  path: '',
  component: MatierePremiereComponent,
  children: [
    {
      path: 'comp',
      component: CompComponent,
    },
    {
      path: 'component',
      component: ComponentComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatierePremiereRoutingModule { }

export const routedComponents = [
  MatierePremiereComponent,
  CompComponent,
  ComponentComponent,
];
