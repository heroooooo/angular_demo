import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/User';
import {UserService} from '../../service/UserService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  username: string;

  constructor(private routerInfo: ActivatedRoute , private userService: UserService) { }
  ngOnInit() {
    // this.username = this.routerInfo.snapshot.queryParams['username'];
    this.username = this.userService.currentSubject.value.name;
    console.log('######## home got user name from router' + this.userService.currentSubject.value);
    console.log('######## home got user name from router' + this.username);
  }

}


