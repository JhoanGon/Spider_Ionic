import { Routes } from '@angular/router';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadComponent: () => import('./pages/intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'character-detail/:id',
    loadChildren: () => import('./pages/character-detail/modulo-character-detail/modulo-character-detail.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login/login.module').then( m => m.HomePageModule)
  },
  {
    path: 'character-add',
    loadChildren: () => import('./pages/character-add/character-add/character-add.module').then( m => m.HomePageModule), canActivate: [LoginGuardGuard]
  },
];
