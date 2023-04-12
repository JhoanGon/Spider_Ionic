import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpiderServiceService } from 'src/app/services/spider-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,SharedModule]
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
      console.log(this.spiderData);
    });
  }
  getCharacterById(id: number) {
    this.spiderService.getSpiderById(id).subscribe(data => {
      this.spiderData = data;
      console.log(this.spiderData);
    });
  }

}
