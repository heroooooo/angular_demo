import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../model/User';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../model/Environment';
import {JwtService} from './jwt.service';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  private message: string;
  constructor(private httpClient: HttpClient, private jwtService: JwtService,
              private  router: Router) {}
  public currentSubject = new BehaviorSubject<User>({} as User);
  populate() {
    console.log('############################ userservice populate...........');
    if (this.jwtService.getToken() == null) {
      console.log('############################ token ==null...........');
      // console.log('######################token==null');
      // this.router.navigateByUrl('/authenticate/login');
    } else {
      console.log('######################verfiy token');
      // @ts-ignore
      this.httpClient.post(environment.api_url + '/users/current')
        .subscribe(
          data => {
            // @ts-ignore
            this.currentSubject.next(data.user);
          }, error1 => {
            this.jwtService.destroyToken();
            // this.router.navigateByUrl('/authenticate/login');
          }
        );
    }
  }
  login(user) {
    // const httpParams = new HttpParams();
    // httpParams.set('name', name);
    // httpParams.set('password', password);
    // @ts-ignore
    this.httpClient.post(environment.api_url + '/users/login' ,  user , {} )
      .subscribe(data => {
          console.log('##############login success');
          console.log(data);
        // @ts-ignore
          this.currentSubject.next(data.user);
          // @ts-ignore
          this.jwtService.saveToken(data.token);
      },
      error1 => {
        console.log('##############login fail');
        console.log(error1);
      });
  }
}
