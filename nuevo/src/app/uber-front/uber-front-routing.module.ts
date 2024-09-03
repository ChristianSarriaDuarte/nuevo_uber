import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UberFrontPage } from './uber-front.page';

const routes: Routes = [
  {
    path: '',
    component: UberFrontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UberFrontPageRoutingModule {}
