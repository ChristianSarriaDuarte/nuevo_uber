import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDriverPage } from './register-driver.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterDriverPageRoutingModule {}
