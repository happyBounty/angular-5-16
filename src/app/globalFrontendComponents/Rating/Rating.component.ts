import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'DirectlistRating',
  templateUrl: './Rating.component.html',
  styleUrls: ['./Rating.component.scss']
})
export class RatingComponent implements OnInit {

   @Input() rate : any;
   @Input() review : any = '(12 reviews)';

   constructor() { }

   ngOnInit() {
   }

}
