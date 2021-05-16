import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'feature-grid-section',
  templateUrl: './FeatureGridSection.component.html',
  styleUrls: ['./FeatureGridSection.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeatureGridSectionComponent implements OnInit {

   /** Title for section **/
   @Input('title') Title: any = 'Dummy Title';

   /** Desc for section **/
   @Input('desc') Desc: any = 'Dummy Description';

   /** data for section **/
   @Input('data') Data: any;

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

   }
}
