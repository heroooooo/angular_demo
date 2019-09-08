import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NgZorroAntdModule, NzButtonModule, NzFormModule, NzInputModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IconsProviderModule} from '../icons-provider.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticatorRoutingModule} from './authenticator-routing.module';
import {UserService} from '../service/UserService';
import {JwtService} from '../service';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    AuthenticatorRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    // HttpClientModule,
    CommonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule
  ],
  exports: [LoginComponent, RegisterComponent],
  providers: [UserService, JwtService]
})
export class AuthenticatorModule { }
