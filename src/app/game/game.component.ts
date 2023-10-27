import { Component, OnInit } from '@angular/core';
import { TRUTH_OR_DATE } from '../game/model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  
  hot = TRUTH_OR_DATE.Hot;
  date = TRUTH_OR_DATE.Date;
  text: string = '';
  title: string = '';
  isHot: boolean = false;
  isClickButtonHot: boolean = false;
  isClickButtonParty: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onChooseType(event: any, type: string) {
    if (type === 'hot') {
      this.isClickButtonHot = !this.isClickButtonHot;      
      this.isHot = true;
    } else {
      this.isClickButtonParty = !this.isClickButtonParty;      
      this.isHot = false;
    }
  }

  onGenerateText() {
    if (this.isHot) {
      const random = Math.random();
      if (random < 0.5) {
        // Nếu random < 0.5, chọn truth
        const randomIndex = Math.floor(Math.random() * this.hot.Truth.length);
        const selectedValue = this.hot.Truth[randomIndex];
        this.text = selectedValue;
        this.title = 'Truth';
        console.log('truth:', selectedValue);
      } else {
        // Nếu random >= 0.5, chọn dare
        const randomIndex = Math.floor(Math.random() * this.hot.Dare.length);
        const selectedValue = this.hot.Dare[randomIndex];
        this.text = selectedValue;
        this.title = 'Dare';
        console.log('dare:', selectedValue);
      }
    } else {
      const random = Math.random();
      if (random < 0.5) {
        // Nếu random < 0.5, chọn truth
        const randomIndex = Math.floor(Math.random() * this.date.Truth.length);
        const selectedValue = this.date.Truth[randomIndex];
        this.text = selectedValue;
        this.title = 'Truth';
        console.log('truth:', selectedValue);
      } else {
        // Nếu random >= 0.5, chọn dare
        const randomIndex = Math.floor(Math.random() * this.date.Dare.length);
        const selectedValue = this.date.Dare[randomIndex];
        this.text = selectedValue;
        this.title = 'Dare';
        console.log('dare:', selectedValue);
      }
    }
  }

}
