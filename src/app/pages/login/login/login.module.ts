import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from '../login.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from 'src/app/services/auth-service.service';


const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  declarations: [LoginPage],
  imports: [IonicModule, CommonModule, FormsModule, SharedModule, RouterModule.forChild(routes), HttpClientModule],
  exports: [IonicModule, CommonModule, FormsModule,SharedModule,HttpClientModule],
  providers: [AuthServiceService]
})
export class HomePageModule {}
