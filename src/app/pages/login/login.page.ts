import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

interface Login {
  user: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName: string = '';
  userPassword: string = '';
  userInfo: Login = { user: '', password: '' };
  logginIn: boolean = false;

  constructor(private router: Router, public authService: AuthServiceService, private http:HttpClient, private httpModule: HttpClientModule,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  async confirmAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: ' ',
      message: 'Bienvenido',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: ' ',
      message: 'Contraseña o usuario incorrecto',
      buttons: ['OK'],
    });
    await alert.present();
  }

  loginUser() {
    this.userInfo.user = this.userName;
    this.userInfo.password = this.userPassword;

    this.authService.login(this.userInfo).subscribe(
      (res) => {
        if(res){
          this.confirmAlert();
          this.router.navigate(['/character-add']);
          sessionStorage.setItem('isLoggedIn', 'true');
        }else{
          this.errorAlert();
          console.log(res);
          sessionStorage.setItem('isLoggedIn', 'false');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
