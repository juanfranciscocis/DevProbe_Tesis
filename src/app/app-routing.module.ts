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
    loadChildren: () => import('./pages/main_graphs/home/home.module').then(m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/login_register/register/register.module').then(m => m.RegisterPageModule),
      ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login_register/login/login.module').then(m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)

  },
  {
    path: 'myteam',
    loadChildren: () => import('./pages/myteam/myteam.module').then( m => m.MyteamPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'model-product',
    loadChildren: () => import('./pages/model_the_product/model-product/model-product.module').then(m => m.ModelProductPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'new-product',
    loadChildren: () => import('./pages/model_the_product/new-product/new-product.module').then(m => m.NewProductPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'view-product',
    loadChildren: () => import('./pages/model_the_product/view-product/view-product.module').then(m => m.ViewProductPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'show-map',
    loadChildren: () => import('./pages/latency_test/show-map/show-map.module').then(m => m.ShowMapPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'latency-test',
    loadChildren: () => import('./pages/latency_test/latency-test/latency-test.module').then(m => m.LatencyTestPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'latency-chooser',
    loadChildren: () => import('./pages/latency_test/latency-chooser/latency-chooser.module').then(m => m.LatencyChooserPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'latency-results',
    loadChildren: () => import('./pages/latency_test/latency-results/latency-results.module').then(m => m.LatencyResultsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'graph-latency',
    loadChildren: () => import('./pages/main_graphs/latency_graph/graph-latency/graph-latency.module').then(m => m.GraphPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'trace-chooser',
    loadChildren: () => import('./pages/trace_test/trace-chooser/trace-chooser.module').then(m => m.TraceChooserPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'trace-test',
    loadChildren: () => import('./pages/trace_test/trace-test/trace-test.module').then(m => m.TraceTestPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'trace-results',
    loadChildren: () => import('./pages/trace_test/trace-results/trace-results.module').then(m => m.TraceResultsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'show-map-trace',
    loadChildren: () => import('./pages/trace_test/show-map-trace/show-map-trace.module').then(m => m.ShowMapTracePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'graph-data-for',
    loadChildren: () => import('./pages/main_graphs/graph-data-for/graph-data-for.module').then(m => m.GraphDataForPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'graph-trace',
    loadChildren: () => import('./pages/main_graphs/traceroute_graph/graph-trace/graph-trace.module').then(m => m.GraphTracePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'ai',
    loadChildren: () => import('./pages/ai/ai.module').then( m => m.AiPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'flame-graph',
    loadChildren: () => import('./pages/flame_graph/flame-graph/flame-graph.module').then(m => m.FlameGraphPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'flame-graph-for',
    loadChildren: () => import('./pages/flame_graph/flame-graph-for/flame-graph-for.module').then(m => m.FlameGraphForPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'flame-graph-date',
    loadChildren: () => import('./pages/flame_graph/flame-graph-date/flame-graph-date.module').then(m => m.FlameGraphDatePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'flame-graph-compare',
    loadChildren: () => import('./pages/flame_graph/flame-graph-compare/flame-graph-compare.module').then(m => m.FlameGraphComparePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'software-testing',
    loadChildren: () => import('./pages/software_testing/software-testing/software-testing.module').then(m => m.SoftwareTestingPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'software-testing-chooser',
    loadChildren: () => import('./pages/software_testing/software-testing-chooser/software-testing-chooser.module').then(m => m.SoftwareTestingChooserPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'create-system-test',
    loadChildren: () => import('./pages/software_testing/system_tests/create-system-test/create-system-test.module').then(m => m.CreateSystemTestPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'execute-system-test',
    loadChildren: () => import('./pages/software_testing/system_tests/execute-system-test/execute-system-test.module').then(m => m.ExecuteSystemTestPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'board',
    loadChildren: () => import('./pages/board/board.module').then( m => m.BoardPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'view-history-system-test',
    loadChildren: () => import('./pages/software_testing/system_tests/view-history-system-test/view-history-system-test.module').then(m => m.ViewHistorySystemTestPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'view-system-test',
    loadChildren: () => import('./pages/software_testing/system_tests/view-system-test/view-system-test.module').then(m => m.ViewSystemTestPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'create-unit-test',
    loadChildren: () => import('./pages/software_testing/unit_tests/create-unit-test/create-unit-test.module').then( m => m.CreateUnitTestPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'create-integration-test',
    loadChildren: () => import('./pages/software_testing/integration_tests/create-integration-test/create-integration-test.module').then( m => m.CreateIntegrationTestPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'load-test-chooser',
    loadChildren: () => import('./pages/load_test/load-test-chooser/load-test-chooser.module').then( m => m.LoadTestChooserPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'load-test',
    loadChildren: () => import('./pages/load_test/load-test/load-test.module').then( m => m.LoadTestPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'load-test-history',
    loadChildren: () => import('./pages/load_test/load-test-history/load-test-history.module').then( m => m.LoadTestHistoryPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'incident-manager-chooser',
    loadChildren: () => import('./pages/incident_manager/incident-manager-chooser/incident-manager-chooser.module').then( m => m.IncidentManagerChooserPageModule),
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
