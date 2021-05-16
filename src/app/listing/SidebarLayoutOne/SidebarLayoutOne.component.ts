import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';

@Component({
  selector: 'sidebar-layout-one',
  templateUrl: './SidebarLayoutOne.component.html',
  styleUrls: ['./SidebarLayoutOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarLayoutOneComponent implements OnInit{

   someRange : any = 10;
   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

   }
}
