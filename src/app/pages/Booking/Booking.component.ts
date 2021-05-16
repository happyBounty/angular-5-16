import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'booking',
  templateUrl: './Booking.component.html',
  styleUrls: ['./Booking.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookingComponent implements OnInit{

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {
      var radios = document.querySelectorAll('.payment-tab-trigger > input');

      for (var i = 0; i < radios.length; i++) {
         radios[i].addEventListener('change', expandAccordion);
      }

      function expandAccordion (event) {
        var allTabs = document.querySelectorAll('.payment-tab');
        for (var i = 0; i < allTabs.length; i++) {
          allTabs[i].classList.remove('payment-tab-active');
        }
        event.target.parentNode.parentNode.classList.add('payment-tab-active');
      }
      
   }
}
