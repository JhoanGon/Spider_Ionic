import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpiderServiceService } from 'src/app/services/spider-service.service';
import { HomePageModule } from './modulo-character-detail/modulo-character-detail.module';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {

  characterId: string = "";
  character = null as any;

  constructor(private actRoute: ActivatedRoute, private spiderServiceSvc: SpiderServiceService) {
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string;
    console.log(this.characterId);
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getCharacters();
 }

 getCharacters(){
   this.spiderServiceSvc.getSpiderById(parseInt(this.characterId)).subscribe({
     next: (res: any) =>{
       this.character = res;
       console.log(this.character);
     },
     error: (error: any) => {

     }
   })
 }
}
