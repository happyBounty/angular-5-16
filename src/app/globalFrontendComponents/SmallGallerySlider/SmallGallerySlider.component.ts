import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'small-gallery-slider',
  templateUrl: './SmallGallerySlider.component.html',
  styleUrls: ['./SmallGallerySlider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SmallGallerySliderComponent implements OnInit {

   /** Title for baner **/
   @Input('title') Title: any = 'Dummy Title';

   /** Background for baner **/
   @Input('data') Data: any;

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

      $('.listing-slider-small').slick({
         centerMode: true,
         centerPadding: '0',
         slidesToShow: 3,
         responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
         ]
      });

      $('.mfp-gallery-container').each(function() { // the containers for all your galleries

         $(this).magnificPopup({
             type: 'image',
             delegate: 'a.mfp-gallery',

             fixedContentPos: true,
             fixedBgPos: true,

             overflowY: 'auto',

             closeBtnInside: false,
             preloader: true,

             removalDelay: 0,
             mainClass: 'mfp-fade',

             gallery:{enabled:true, tCounter: ''}
         });
      });
   }
}
