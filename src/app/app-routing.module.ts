import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routesPath } from './core/constants/routes';

const routes: Routes = [
  { path: '', redirectTo: routesPath.app.user, pathMatch: 'full' },
  { path: routesPath.app.user, loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
