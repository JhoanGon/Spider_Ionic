import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailPage } from '../character-detail.page';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: CharacterDetailPage
  }
];

@NgModule({
  declarations: [CharacterDetailPage],
  imports: [IonicModule, CommonModule, FormsModule, SharedModule, RouterModule.forChild(routes),HttpClientModule],
  exports: [IonicModule, CommonModule, FormsModule,SharedModule,HttpClientModule]
})
export class HomePageModule {}
export { CharacterDetailPage };
