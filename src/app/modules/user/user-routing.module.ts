import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routesPath } from 'src/app/core/constants/routes';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CredentialOrganizationComponent } from './components/credential-organization/credential-organization.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: routesPath.user.credentialOrganization, pathMatch: 'full' },
      { path: routesPath.user.credentialOrganization, component: CredentialOrganizationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
