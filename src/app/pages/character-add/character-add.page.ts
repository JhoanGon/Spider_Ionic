import { Component, OnInit } from '@angular/core';
import { SpiderServiceService } from 'src/app/services/spider-service.service';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import * as AWS from 'aws-sdk';

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
  isValid: boolean = true;
  base64String: string;
  fileName: string;


  constructor(private spiderService: SpiderServiceService, private http: HttpClient, public authService: AuthServiceService) {}

  ngOnInit() {}

  splitWord(word: string): string[] {
    return word.split('');
  }
  async uploadToS3(base64String: string, fileName: string) {
    const bucket = new AWS.S3({
      accessKeyId: 'AKIAQC4GJNHKNELBYXDY',
      secretAccessKey: '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',
      region: 'us-east-1'
    });

    const params = {
      Bucket: 'spidermansphotos',
      Key: 'spidy/' + fileName,
      Body: new Uint8Array(atob(base64String).split('').map(char => char.charCodeAt(0))),
      ContentType: 'image/webp' // Change according to the file type
    };

    try {
      const s3Response = await bucket.upload(params).promise();
      console.log('Data:', s3Response);
      this.imgValue = s3Response.Location; // Update image variable with S3 URL
    } catch (err) {
      console.log('Error:', err);
    }
  }

  onFileSelected(event : any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result != null) { // Add null check
        this.base64String = reader.result.toString().split(',')[1];
        this.fileName = file.name;
      }
    };
  }

  onSubmit() {
    //console.log(this.nameValue);
    const newSpider: any = {
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
    Object.keys(newSpider).forEach(key => {
      if (!newSpider[key]) {
        this.isValid = false;
        return;
      }
    });

    if (this.isValid) {
      this.uploadToS3(this.base64String,this.fileName);
      this.spiderService.postSpider(newSpider).subscribe((response) => {
        console.log(response);
      });
    } else {
      alert('Por favor complete todos los campos obligatorios');
    }
  }

}
