import { Component, OnInit } from '@angular/core';
import { SpiderServiceService } from 'src/app/services/spider-service.service';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-character-add',
  templateUrl: './character-add.page.html',
  styleUrls: ['./character-add.page.scss'],
})
export class CharacterAddPage implements OnInit {

  nameValue: string;
  aliasValue: string;
  earthValue: string;
  imgValue: string;
  firstApparitionValue: string;
  occupationValue: string;
  genderValue: string;
  raceValue: string;
  descriptionValue: string;

  constructor(private spiderService: SpiderServiceService, private http: HttpClient, public authService: AuthServiceService) {}

  ngOnInit() {}

  splitWord(word: string): string[] {
    return word.split('');
  }

  onSubmit() {
    //console.log(this.nameValue);
    const newSpider = {
      name: this.nameValue,
      alias: this.aliasValue,
      earth: this.earthValue,
      img: this.imgValue,
      firstApparition: this.firstApparitionValue,
      occupation: this.occupationValue,
      gender: this.genderValue,
      race: this.raceValue,
      description: this.descriptionValue
    };

    console.log(newSpider);

    this.spiderService.postSpider(newSpider).subscribe((response) => {
      console.log(response);
    });
  }

}
