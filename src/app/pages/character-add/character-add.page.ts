import { Component, OnInit } from '@angular/core';
import { HomePageModule } from './character-add/character-add.module';
import { SpiderServiceService } from 'src/app/services/spider-service.service';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-character-add',
  templateUrl: './character-add.page.html',
  styleUrls: ['./character-add.page.scss'],
})
export class CharacterAddPage implements OnInit {

  constructor(private spiderService: SpiderServiceService, private http: HttpClient, private authService: AuthServiceService) { }

  ngOnInit() {
  }

}
