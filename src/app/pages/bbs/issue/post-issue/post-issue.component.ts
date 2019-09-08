import {Component, OnDestroy, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../model/Environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-issue',
  templateUrl: './post-issue.component.html',
  styleUrls: ['./post-issue.component.css']
})

export class PostIssueComponent implements OnInit, OnDestroy {
  constructor(private httpClient: HttpClient , private route: Router) {}
  public Editor = ClassicEditor;
  private content = '';
  submit() {
    this.httpClient.post(environment.api_url + '/discuss',
      {content: this.content,
        tag: '',
      }).subscribe(
        next => {
          this.route.navigateByUrl('../list');
        },
      error1 => {
          console.log('#############post err');
      }
    )
    console.log('');
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
