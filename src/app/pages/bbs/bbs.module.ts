import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueListComponent } from './issue/issue-list/issue-list.component';
import {NzButtonModule, NzListModule} from 'ng-zorro-antd';
import {HttpClient} from '@angular/common/http';
import { PostIssueComponent } from './issue/post-issue/post-issue.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import {BbsRoutingModule} from './bbs-routing.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ IssueListComponent, PostIssueComponent],
  imports: [
    CommonModule,
    NzListModule,
    EditorModule,
    NzButtonModule,
    BbsRoutingModule,
    CKEditorModule,
    FormsModule
  ],
  providers : [HttpClient]
})
export class BbsModule { }
