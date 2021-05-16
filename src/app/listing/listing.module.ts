import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NouisliderModule } from 'ng2-nouislider';

import { ListWithSidebarComponent } from './ListWithSidebar/ListWithSidebar.component';
import { ListFullWidthComponent } from './ListFullWidth/ListFullWidth.component';
import { ListFullWidthMapComponent } from './ListFullWidthMap/ListFullWidthMap.component'; 

import { GridWithSidebarComponent } from './GridWithSidebar/GridWithSidebar.component';
import { GridFullWidthComponent } from './GridFullWidth/GridFullWidth.component';
import { GridFullWidthMapComponent } from './GridFullWidthMap/GridFullWidthMap.component';

import { HalfScreenMapListComponent } from './HalfScreenMapList/HalfScreenMapList.component';
import { HalfScreenMapGridComponent } from './HalfScreenMapGrid/HalfScreenMapGrid.component';

import { ListingDetailOneComponent } from './ListingDetailOne/ListingDetailOne.component';
import { ListingDetailTwoComponent } from './ListingDetailTwo/ListingDetailTwo.component';

import { GallerySliderComponent } from '../globalFrontendComponents/GallerySlider/GallerySlider.component';
import { SmallGallerySliderComponent } from '../globalFrontendComponents/SmallGallerySlider/SmallGallerySlider.component';

import { SidebarLayoutOneComponent } from './SidebarLayoutOne/SidebarLayoutOne.component';
import { SidebarLayoutTwoComponent } from './SidebarLayoutTwo/SidebarLayoutTwo.component';
import { SidebarLayoutThreeComponent } from './SidebarLayoutThree/SidebarLayoutThree.component';

import { ListingRoutes } from './listing.routing';

import { GlobalModule } from '../globalFrontendComponents/global.module';


@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    SlickCarouselModule,
    NouisliderModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
    RouterModule.forChild(ListingRoutes),
  ],
  declarations: [ 
     ListWithSidebarComponent,
     ListFullWidthComponent,
     ListFullWidthMapComponent,
     GridWithSidebarComponent,
     GridFullWidthComponent,
     GridFullWidthMapComponent,
     HalfScreenMapListComponent,
     HalfScreenMapGridComponent,
     ListingDetailOneComponent,
     ListingDetailTwoComponent,
     GallerySliderComponent,
     SmallGallerySliderComponent,
     SidebarLayoutOneComponent,
     SidebarLayoutTwoComponent,
     SidebarLayoutThreeComponent
   ]
})

export class ListingModule {}
