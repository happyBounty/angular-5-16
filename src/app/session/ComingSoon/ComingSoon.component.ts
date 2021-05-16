import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'coming-soon',
  templateUrl: './ComingSoon.component.html',
  styleUrls: ['./ComingSoon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComingSoonComponent implements OnInit{

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {
      $("#countdown")
         .countdown('2019/12/12', function(event) {
            var $this = $(this).html(event.strftime(''
            + '<div><span>%D</span>  <i>Days</i></div>'
            + '<div><span>%H</span> <i>Hours</i></div> '
            + '<div><span>%M</span> <i>Minutes</i></div> '
            + '<div><span>%S</span> <i>Seconds</i></div>'
         ));
      });
   }
}
