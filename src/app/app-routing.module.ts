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
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
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
  {
    path: 'latency-chooser',
    loadChildren: () => import('./pages/latency-chooser/latency-chooser.module').then( m => m.LatencyChooserPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'latency-results',
    loadChildren: () => import('./pages/latency-results/latency-results.module').then( m => m.LatencyResultsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'graph-latency',
    loadChildren: () => import('./pages/graph-latency/graph-latency.module').then(m => m.GraphPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'trace-chooser',
    loadChildren: () => import('./pages/trace-chooser/trace-chooser.module').then( m => m.TraceChooserPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'trace-test',
    loadChildren: () => import('./pages/trace-test/trace-test.module').then( m => m.TraceTestPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'trace-results',
    loadChildren: () => import('./pages/trace-results/trace-results.module').then( m => m.TraceResultsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'show-map-trace',
    loadChildren: () => import('./pages/show-map-trace/show-map-trace.module').then( m => m.ShowMapTracePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'graph-data-for',
    loadChildren: () => import('./pages/graph-data-for/graph-data-for.module').then( m => m.GraphDataForPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'graph-trace',
    loadChildren: () => import('./pages/graph-trace/graph-trace.module').then( m => m.GraphTracePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'ai',
    loadChildren: () => import('./pages/ai/ai.module').then( m => m.AiPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'flame-graph',
    loadChildren: () => import('./pages/flame-graph/flame-graph.module').then( m => m.FlameGraphPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'flame-graph-for',
    loadChildren: () => import('./pages/flame-graph-for/flame-graph-for.module').then( m => m.FlameGraphForPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'flame-graph-date',
    loadChildren: () => import('./pages/flame-graph-date/flame-graph-date.module').then( m => m.FlameGraphDatePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'flame-graph-compare',
    loadChildren: () => import('./pages/flame-graph-compare/flame-graph-compare.module').then( m => m.FlameGraphComparePageModule)
  },
  {
    path: 'board',
    loadChildren: () => import('./pages/board/board.module').then( m => m.BoardPageModule)
  },
  {
    path: 'render-restart',
    loadChildren: () => import('./pages/render-restart/render-restart.module').then( m => m.RenderRestartPageModule)
  },
  {
    path: 'software-testing',
    loadChildren: () => import('./pages/software-testing/software-testing.module').then( m => m.SoftwareTestingPageModule)
  },
  {
    path: 'system-tests',
    loadChildren: () => import('./pages/system-tests/system-tests.module').then( m => m.SystemTestsPageModule)
  },
  {
    path: 'create-system-test',
    loadChildren: () => import('./pages/create-system-test/create-system-test.module').then( m => m.CreateSystemTestPageModule)
  },
  {
    path: 'execute-system-test',
    loadChildren: () => import('./pages/execute-system-test/execute-system-test.module').then( m => m.ExecuteSystemTestPageModule)
  },
  {
    path: 'software-testing-chooser',
    loadChildren: () => import('./pages/software-testing-chooser/software-testing-chooser.module').then( m => m.SoftwareTestingChooserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
