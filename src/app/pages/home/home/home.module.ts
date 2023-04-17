import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [HomePage],
  imports: [IonicModule, CommonModule, FormsModule, SharedModule, RouterModule.forChild(routes)],
  exports: [IonicModule, CommonModule, FormsModule,SharedModule]
})
export class HomePageModule {}
