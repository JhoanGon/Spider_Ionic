import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { SpiderServiceService } from '../services/spider-service.service';
import { AuthServiceService } from '../services/auth-service.service';
import { LoginGuardGuard } from '../guards/login-guard.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports:[
    RouterModule,
    HttpClientModule
  ],
  providers: [
    SpiderServiceService,
    AuthServiceService,
    LoginGuardGuard
  ]
})
export class SharedModule { }
