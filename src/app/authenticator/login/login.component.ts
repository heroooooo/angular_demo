import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {UserService} from '../../service/UserService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    console.log('############################ login form submit...........');
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      console.log('##########################' + this.validateForm.controls[i].value);
    }
    this.userService.login(this.validateForm.value)
      .subscribe(
        user  => {
          console.log(user.name)
          if ( user.name !== undefined) {
            // this.router.navigateByUrl('/home');
            this.userService.currentSubject.next(user);
            console.log('############################ login success...........' + user.name);
            this.router.navigate (['/home'] , { queryParams: { username: this.userService.currentSubject.value.name }});
            this.validateForm.get('message1');
          }
        },
        error1 => {
          console.log('############################ login fail...........');
        }
      );
    // console.log(this.validateForm.value.password);
  }

  constructor(private fb: FormBuilder , private userService: UserService , private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]]
      , remember: [true]
    });
    this.validateForm.addControl('message1', new FormControl());
    this.validateForm.get('password').valueChanges // .pipe(map(v => v))
      .subscribe(
        value => console.log('current value = ' + value),
        error1 => console.log('##############error')
      );
  }
}
