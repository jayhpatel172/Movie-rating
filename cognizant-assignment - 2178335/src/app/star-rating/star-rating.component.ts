import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.sass']
})
export class StarRatingComponent implements OnInit {
  @Input('rating') rating: number = 3;
  @Input('starCount') starCount: number = 5;
  @Input('enableClick') enableClick: boolean = false;
  @Output() ratingUpdated = new EventEmitter();

  private snackBarDuration: number = 2000;
  ratingArr:Array<number> = [];

  constructor(private snackBar: MatSnackBar,private route: Router) {}

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating: number) {
    if(this.enableClick) {
      this.ratingUpdated.emit(rating);
      return false;
    }
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}