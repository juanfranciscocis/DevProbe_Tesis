import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
      ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)

  },
  {
    path: 'myteam',
    loadChildren: () => import('./pages/myteam/myteam.module').then( m => m.MyteamPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'model-product',
    loadChildren: () => import('./pages/model-product/model-product.module').then( m => m.ModelProductPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'new-product',
    loadChildren: () => import('./pages/new-product/new-product.module').then( m => m.NewProductPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'view-product',
    loadChildren: () => import('./pages/view-product/view-product.module').then( m => m.ViewProductPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'show-map',
    loadChildren: () => import('./pages/show-map/show-map.module').then( m => m.ShowMapPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'latency-test',
    loadChildren: () => import('./pages/latency-test/latency-test.module').then( m => m.LatencyTestPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
