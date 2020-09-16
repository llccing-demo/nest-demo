import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubSsoComponent } from './pages/github-sso/github-sso.component';

const routes: Routes = [
  {
    path: 'github-sso',
    component: GithubSsoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
