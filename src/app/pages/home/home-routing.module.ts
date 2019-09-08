import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {Entity1managerComponent} from '../entity1manager/entity1manager.component';

const routes: Routes = [
  { path: '', component: HomeComponent , children: [
      // {path: '', component: WelcomeComponent },
      {path: 'welcome', component: WelcomeComponent},
      {path: 'entity1', component: Entity1managerComponent},
      {path: 'issue', loadChildren: () => import('../bbs/bbs.module').then(m => m.BbsModule)},
      // {path: 'issue', component: IssueListComponent},
      {path: '**', redirectTo: 'xxxx' }
    ]},
  {path: 'auxiliaryPath', component: Entity1managerComponent , outlet: 'outlet2'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
