import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DropzoneComponent , DropzoneDirective,
   DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
declare var $ : any;

@Component({
  selector: 'add-listing',
  templateUrl: './AddListing.component.html',
  styleUrls: ['./AddListing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddListingComponent implements OnInit{

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {
      $(".add-listing-section").each(function() {

         var switcherSection = $(this);
         var switcherInput = $(this).find('.switch input');

         if(switcherInput.is(':checked')){
            $(switcherSection).addClass('switcher-on');
         }

         switcherInput.change(function(){
            if(this.checked===true){
               $(switcherSection).addClass('switcher-on');
            } else {
               $(switcherSection).removeClass('switcher-on');
            }
         });

      });
   }
}
