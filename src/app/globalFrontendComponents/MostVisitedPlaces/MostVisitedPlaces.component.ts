import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'most-visited-places',
  templateUrl: './MostVisitedPlaces.component.html',
  styleUrls: ['./MostVisitedPlaces.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MostVisitedPlacesComponent implements OnInit {

   /** Title for baner **/
   @Input('title') Title: any = 'Dummy Title';

   /** Description for baner **/
   @Input('desc') Desc: any = 'Description';

   /** Description for baner **/
   @Input('bgColor') BgColor: any = '#f8f8f8';

   /** Background for baner **/
   @Input('data') Data: any;

   slideConfig = {
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  dots: true,
                  arrows: true,
                  responsive: [
                      {
                        breakpoint: 992,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                        }
                      },
                      {
                        breakpoint: 769,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                      }
                 ]
               };

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {}
}
