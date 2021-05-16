import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

   private _router: Subscription;
   url: string;

   isFixedClass : boolean = false; 

   constructor(private router: Router){}

   ngOnInit(){
      // this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      //    this.url = event.url;
      //    if (this.isFixedHeader()) {
      //       this.isFixedClass = true;
      //    }
      //    else
      //    {
      //       this.isFixedClass = false;
      //    }
      // });
   }

   isFixedHeader()
   {
      if (this.url === '/listing/half-map/grid' || this.url === '/listing/half-map/list') {
         return true;
       } else {
         return false
       }
   }

   ngAfterViewInit()
   {
     
   }
}
