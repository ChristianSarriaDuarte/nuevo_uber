import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'uber-front',
    loadChildren: () => import('./uber-front/uber-front.module').then( m => m.UberFrontPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'become-driver',
    loadChildren: () => import('./become-driver/become-driver.module').then( m => m.BecomeDriverPageModule)
  },
  {
    path: 'find-ride',
    loadChildren: () => import('./find-ride/find-ride.module').then( m => m.FindRidePageModule)
  },
  {
    path: 'register-driver',
    loadChildren: () => import('./register-driver/register-driver.module').then( m => m.RegisterDriverPageModule)
  },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
