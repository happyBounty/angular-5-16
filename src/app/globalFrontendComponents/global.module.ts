import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
// import { BarRatingModule } from "ngx-bar-rating";
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { MapBannerComponent } from '../globalFrontendComponents/MapBanner/MapBanner.component';
import { TitleBarComponent } from '../globalFrontendComponents/TitleBar/TitleBar.component';
import { PaginationComponent } from '../globalFrontendComponents/Pagination/Pagination.component';
import { RatingComponent } from '../globalFrontendComponents/Rating/Rating.component';
import { TeamComponent } from './Team/Team.component';
import { BannerComponent } from './Banner/Banner.component';
import { PopularCategoriesComponent } from './PopuplarCategories/PopularCategories.component';
import { MostVisitedPlacesComponent } from './MostVisitedPlaces/MostVisitedPlaces.component';
import { RecentBlogComponent } from './RecentBlog/RecentBlog.component';
import { FeatureSectionComponent } from './FeatureSection/FeatureSection.component';
import { TestimonialComponent } from './Testimonial/Testimonial.component';
import { FeatureGridSectionComponent } from '../globalFrontendComponents/FeatureGridSection/FeatureGridSection.component';
import { PricingComponent } from './Pricing/Pricing.component';
import { ParallaxComponent } from './ParallaxSection/Parallax.component';
import { ServicesComponent } from './Services/Services.component';

@NgModule({
   imports : [
   CommonModule,
   RouterModule,
   // BarRatingModule,
   SlickCarouselModule,
   AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'})],
  declarations: [
    MapBannerComponent,
    TitleBarComponent,
    PaginationComponent,
    RatingComponent,
    TeamComponent,
    BannerComponent ,
     PopularCategoriesComponent,
     MostVisitedPlacesComponent,
     RecentBlogComponent,
     FeatureSectionComponent,
     TestimonialComponent,
     FeatureGridSectionComponent,
     PricingComponent,
     ParallaxComponent,
     ServicesComponent
  ],
  exports: [ 
     MapBannerComponent,
     TitleBarComponent,
     PaginationComponent,
     RatingComponent,
     TeamComponent,
     BannerComponent ,
     PopularCategoriesComponent,
     MostVisitedPlacesComponent,
     RecentBlogComponent,
     FeatureSectionComponent,
     TestimonialComponent,
     FeatureGridSectionComponent,
     PricingComponent,
     ParallaxComponent,
     ServicesComponent
   ]
})

export class GlobalModule {}
