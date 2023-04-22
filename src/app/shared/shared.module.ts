import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { SpiderServiceService } from '../services/spider-service.service';
import { AuthServiceService } from '../services/auth-service.service';
import { LoginGuardGuard } from '../guards/login-guard.guard';
import { InputComponent } from './components/input/input.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';
import { ButtonComponent } from './components/button/button.component';




@NgModule({
  declarations: [
    InputComponent,
    LoaderComponent,
    AlertSuccessComponent,
    AlertErrorComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    RouterModule,
    HttpClientModule,
    InputComponent,
    LoaderComponent,
    AlertSuccessComponent,
    AlertErrorComponent,
    ButtonComponent
  ],
  providers: [
    SpiderServiceService,
    AuthServiceService,
    LoginGuardGuard
  ]
})
export class SharedModule { }
