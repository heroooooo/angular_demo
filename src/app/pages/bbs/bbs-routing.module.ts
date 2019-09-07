import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IssueListComponent} from '../bbs/issue/issue-list/issue-list.component';
import {PostIssueComponent} from './issue/post-issue/post-issue.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: IssueListComponent},
  {path: 'post', component: PostIssueComponent},
  {path: '**', redirectTo: 'post' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BbsRoutingModule { }
