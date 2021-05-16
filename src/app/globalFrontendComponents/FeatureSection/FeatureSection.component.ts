import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'feature-section',
  templateUrl: './FeatureSection.component.html',
  styleUrls: ['./FeatureSection.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeatureSectionComponent implements OnInit {

   /** Title for section **/
   @Input('title') Title: any = 'Dummy Title';

   /** Desc for section **/
   @Input('desc') Desc: any = 'Dummy Description';

   /** Image for section **/
   @Input('image') Image: any = '';

   /** data for section **/
   @Input('data') Data: any;

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

   }
}
