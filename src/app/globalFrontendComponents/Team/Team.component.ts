import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'team',
  templateUrl: './Team.component.html',
  styleUrls: ['./Team.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeamComponent implements OnInit {

   /** Title for section **/
   @Input('title') Title: any = 'Dummy Title';

   /** Desc for section **/
   @Input('desc') Desc: any = 'Dummy Description';

   /** Background for section **/
   @Input('data') Data: any;

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

   }
}
