import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'pagination',
  templateUrl: './Pagination.component.html',
  styleUrls: ['./Pagination.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit {


   constructor(private router: Router){}

   ngOnInit(){

   }

   ngAfterViewInit()
   {
     
   }
}
