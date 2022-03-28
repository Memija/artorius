import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookiePolicyComponent, KnowledgeBaseComponent, NotFoundComponent, ProfileComponent, ProjectsComponent } from './components';

const routes: Routes = [
  {
    component: ProfileComponent,
    path: '',
  },
  {
    component: CookiePolicyComponent,
    path: 'cookie-policy',
  },
  {
    component: KnowledgeBaseComponent,
    path: 'knowledge-base',
  },
  {
    component: ProjectsComponent,
    path: 'projects',
  },
  {
    component: NotFoundComponent,
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
