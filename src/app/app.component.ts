import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './service/UserService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  isTokenValid = false;
  constructor(private httpClient: HttpClient, private userService: UserService , private router: Router) {}
  ngOnInit(): void {
    this.userService.populate();
    this.userService.currentSubject.subscribe(
      user => {
        console.log('#############232' + user.name)
        if (user.name === undefined) {
          this.router.navigateByUrl('/authenticate/login');
        } else {
          console.log('#############343.......router to /home')
          this.router.navigateByUrl('/home');
        }
      },
      error1 => {
      }
    );
    // if (this.userService.currentSubject.getValue().name === undefined) {
    //   this.router.navigateByUrl('/authenticate/login');
    // } else {
    //   this.router.navigateByUrl('/home');
    // }
  }
}
