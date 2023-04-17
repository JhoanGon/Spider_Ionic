import { Component, OnInit } from '@angular/core';
import { SpiderServiceService } from 'src/app/services/spider-service.service';
import { HomePageModule } from './home/home.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  spiderData: any;

  constructor(private spiderService: SpiderServiceService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){
    this.spiderService.getSpider().subscribe(data => {
      this.spiderData = data;
    });
  }
  getCharacterById(id: number) {
    this.spiderService.getSpiderById(id).subscribe(data => {
      this.spiderData = data;
    });
  }

}
