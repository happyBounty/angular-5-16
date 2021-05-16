import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'services-section',
  templateUrl: './Services.component.html',
  styleUrls: ['./Services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent implements OnInit {

   /** Title for service **/
   @Input('title') Title: any = 'Dummy Title';

   /** Description for service **/
   @Input('desc') Desc: any = 'Description';

   /** Background for service **/
   @Input('data') Data: any;

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

   }
}
