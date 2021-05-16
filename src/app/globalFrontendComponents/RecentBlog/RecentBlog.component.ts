import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'recent-blog',
  templateUrl: './RecentBlog.component.html',
  styleUrls: ['./RecentBlog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecentBlogComponent implements OnInit {

   /** Title for baner **/
   @Input('title') Title: any = 'Dummy Title';

   /** Background for baner **/
   @Input('data') Data: any;

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

   }
}
