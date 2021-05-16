import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'popular-categories',
  templateUrl: './PopularCategories.component.html',
  styleUrls: ['./PopularCategories.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopularCategoriesComponent implements OnInit {

   /** Title for baner **/
   @Input('title') Title: any = 'Dummy Title';

   /** Description for baner **/
   @Input('desc') Desc: any = 'Description';

   /** Background for baner **/
   @Input('data') Data: any;

   slideConfig = {
        centerMode: true,
        centerPadding: '15%',
        slidesToShow: 3,
        dots: true,
        arrows: false,
        responsive: [
         {
           breakpoint: 1441,
           settings: {
             centerPadding: '10%',
             slidesToShow: 3
           }
         },
         {
           breakpoint: 1025,
           settings: {
             centerPadding: '10px',
             slidesToShow: 2,
           }
         },
         {
           breakpoint: 767,
           settings: {
             centerPadding: '10px',
             slidesToShow: 1
           }
         }
        ]
      };

   constructor(){}

   ngOnInit(){
   
   }

   ngAfterViewInit()
   { }
}
