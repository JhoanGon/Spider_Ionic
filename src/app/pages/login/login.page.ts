import { Component, OnInit } from '@angular/core';
import { HomePageModule } from './login/login.module';
import { SpiderServiceService } from 'src/app/services/spider-service.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

  constructor(private spiderService: SpiderServiceService, private router: Router, private authService: AuthServiceService, private http:HttpClient, private httpModule: HttpClientModule) { }

  ngOnInit() {
  }

  loginUser() {
    this.userInfo.user = this.userName;
    this.userInfo.password = this.userPassword;

    this.authService.login(this.userInfo).subscribe(
      (res) => {
        if(res){
          //this.router.navigateByUrl('/character-add');
          this.router.navigate(['/character-add']);
          alert("No hubo error")
          sessionStorage.setItem('isLoggedIn', 'true');
        }else{
          alert("Contraseña o usuario incorrecto");
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
