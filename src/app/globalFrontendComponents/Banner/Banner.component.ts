import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'banner-version1',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {

   /** Title for baner **/
   @Input('title') Title: any = 'Dummy Title';

   /** Description for baner **/
   @Input('desc') Desc: any = 'Description';

   /** Background for baner **/
   @Input('bgImageUrl') BgImageUrl: any = 'assets/images/main-search-background-01.jpg';

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

   }
}
