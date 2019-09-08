import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule, OnInit} from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticatorModule} from './authenticator/authenticator.module';
import {HomeModule} from './pages/home/home.module';
import {HttpTokenInterceptor} from './interceptor';
import {Ainterceptor} from './interceptor/ainterceptor';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticatorModule,
    HomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthenticatorModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    {provide: HTTP_INTERCEPTORS, useClass: Ainterceptor , multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor , multi: true}
    // {provide: ErrorHandler, useClass: TokenExpiredErrorHandler}
    ],
  bootstrap: [AppComponent]
})
export class AppModule  {}
