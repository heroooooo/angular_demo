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
    this.userService.populate()
      .subscribe(
          user => {
            console.log('#############232' + JSON.stringify(user));
            if (user.name === undefined) {
              this.router.navigateByUrl('/authenticate/login');
            } else {
              console.log('#############343.......router to /home');
              this.router.navigateByUrl('/home', user);
            }
          },
          error1 => {
            console.log('########98989 errrrrrrrrrrrrrrrrrrrrrrr');
            this.router.navigateByUrl('/authenticate/login');
          }
      );
  }
}
