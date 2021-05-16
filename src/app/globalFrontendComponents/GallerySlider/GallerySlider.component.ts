import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'gallery-slider',
  templateUrl: './GallerySlider.component.html',
  styleUrls: ['./GallerySlider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GallerySliderComponent implements OnInit {

   /** Title for baner **/
   @Input('title') Title: any = 'Dummy Title';

   /** Background for baner **/
   @Input('data') Data: any;

   slideConfig =   
      {
         centerMode: true,
         centerPadding: '20%',
         slidesToShow: 2,
         responsive: [
            {
              breakpoint: 1367,
              settings: {
                centerPadding: '15%'
              }
            },
            {
              breakpoint: 1025,
              settings: {
                centerPadding: '0'
              }
            },
            {
              breakpoint: 767,
              settings: {
                centerPadding: '0',
                slidesToShow: 1
              }
            }
         ]
      };

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

      // $('.listing-slider').slick({
      //    centerMode: true,
      //    centerPadding: '20%',
      //    slidesToShow: 2,
      //    responsive: [
      //       {
      //         breakpoint: 1367,
      //         settings: {
      //           centerPadding: '15%'
      //         }
      //       },
      //       {
      //         breakpoint: 1025,
      //         settings: {
      //           centerPadding: '0'
      //         }
      //       },
      //       {
      //         breakpoint: 767,
      //         settings: {
      //           centerPadding: '0',
      //           slidesToShow: 1
      //         }
      //       }
      //    ]
      // });

      // $('.mfp-gallery-container').each(function() { // the containers for all your galleries

      //    $(this).magnificPopup({
      //        type: 'image',
      //        delegate: 'a.mfp-gallery',

      //        fixedContentPos: true,
      //        fixedBgPos: true,

      //        overflowY: 'auto',

      //        closeBtnInside: false,
      //        preloader: true,

      //        removalDelay: 0,
      //        mainClass: 'mfp-fade',

      //        gallery:{enabled:true, tCounter: ''}
      //    });
      // });
   }
}
