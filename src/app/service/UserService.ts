import {Injectable} from '@angular/core';
import {BehaviorSubject, forkJoin, Observable, Subject} from 'rxjs';
import {User} from '../model/User';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../model/Environment';
import {JwtService} from './jwt.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

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
      return new Observable(subscriber => {
        subscriber.next({});
      });
    } else {
      console.log('######################verfiy token');
      // @ts-ignore
      return this.httpClient.post(environment.api_url + '/users/current')
        .pipe(map(
          x => {
            // @ts-ignore
            this.currentSubject.next(x);
            return x;
          }
        ));
        // .pipe(map(
        //   user => {
        //     // @ts-ignore
        //     this.currentSubject.next(user);
        //     console.log('############### user from token ......' + user['name']);
        //     console.log('############### user from token ......' + user);
        //     return user;
        //   }
          // ,
          //   error1 => {
          //     console.log('###############   token  err.....');
          //     console.log('###############   token  err......' + error1.toString());
          //     this.jwtService.destroyToken();
          //     return new Observable(subscriber => {
          //     subscriber.next({});
          //   });
          //   // this.router.navigateByUrl('/authenticate/login');
          // }
        // ));
    }
  }
  login(user) {
    // const httpParams = new HttpParams();
    // httpParams.set('name', name);
    // httpParams.set('password', password);
    // @ts-ignore
    return this.httpClient.post(environment.api_url + '/users/login' ,  user , {} )
      .pipe(map(
        data => {
          console.log('##############login success');
          console.log(data);
          // @ts-ignore
          this.currentSubject.next(data.user);
          console.log('##############34234 ' + this.currentSubject.value.name);
          // @ts-ignore
          this.jwtService.saveToken(data.token);
          return data['user'];
        }));
  }
}
