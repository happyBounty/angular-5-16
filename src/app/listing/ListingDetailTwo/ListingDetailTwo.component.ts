import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'list-detail-two',
  templateUrl: './ListingDetailTwo.component.html',
  styleUrls: ['./ListingDetailTwo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListingDetailTwoComponent implements OnInit{

   lat = -34.397;
   lng = 150.644;
   smallGalleryTitle : string = 'Gallery';
   smallGalleryData : any = [
                              {
                                 image : 'assets/images/dp-1.jpg',
                              },
                              {
                                 image : 'assets/images/dp-4.jpg',
                              },
                              {
                                 image : 'assets/images/dp-3.jpg',
                              },
                              {
                                 image : 'assets/images/dp-5.jpg',
                              }
                           ];

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

     
   }
}
