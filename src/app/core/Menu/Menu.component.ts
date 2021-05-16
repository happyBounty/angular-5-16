import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItems } from './menu-items';
declare var $ : any;

@Component({
  selector: 'app-menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

   selectedMenu : any = null;
   selectedSubMenu : any = null;
   constructor(public menuItems: MenuItems, private router: Router) {
   	this.router.events.subscribe((ev) => {
	      if (ev instanceof NavigationEnd) {
	      	$('#navbar_global').removeClass('show');
	      }
	   });
   }

   ngOnInit(){ }

   menuClick(value){
      if(this.selectedMenu == value){
         this.selectedMenu = null;
      }
      else{
         this.selectedMenu = value;
      } 
   }

   subMenuClick(value){
      if(this.selectedSubMenu == value){
         this.selectedSubMenu = null;
      }
      else{
         this.selectedSubMenu = value;
      }
   }
}
