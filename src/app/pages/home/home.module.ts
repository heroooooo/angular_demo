import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from './home.component';
import {IconsProviderModule} from '../../icons-provider.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {WelcomeComponent} from '../welcome/welcome.component';
import {Entity1managerComponent} from '../entity1manager/entity1manager.component';
import {Entity1tableComponent} from '../entity1manager/entity1table/entity1table.component';
import {CommonModule} from '@angular/common';
import {Entity1Service} from '../entity1manager/Entity1Service';
import {BbsModule} from '../bbs/bbs.module';
import {BbsRoutingModule} from '../bbs/bbs-routing.module';
import {Ainterceptor} from '../../interceptor/ainterceptor';


@NgModule({
  imports: [HomeRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    // HttpClientModule,
    CommonModule,
    BbsModule
  ],
  declarations: [HomeComponent, WelcomeComponent, Entity1managerComponent, Entity1tableComponent],
  providers : [
    HttpClient , Entity1Service],
  exports: [HomeComponent]
})
export class HomeModule { }
