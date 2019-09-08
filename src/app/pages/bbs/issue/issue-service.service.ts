import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueServiceService {

  constructor(private httpClient: HttpClient) { }

  getIssues() {
  }
}
