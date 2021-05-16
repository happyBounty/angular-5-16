import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit{

   teamSectionTitle : string = 'The Amazing Team';
   teamSectionDesc  : string = 'According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.';
   teamMembers : any = [
                     {
                        name     : 'Ryan Tompson',
                        position : 'Web Developer',
                        image    : 'assets/images/thumb-1.jpg'
                     },
                     {
                        name     : 'Romina Hadid',
                        position : 'Marketing Strategist',
                        image    : 'assets/images/thumb-2.jpg'
                     },
                     {
                        name     : 'Alexander Smith',
                        position : 'UI/UX Designer',
                        image    : 'assets/images/thumb-3.jpg'
                     },
                     {
                        name     : 'Ethan Moore',
                        position : 'Founder and CEO',
                        image    : 'assets/images/thumb-4.jpg'
                     }
                    
                  ]; 

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {
      
   }
}
