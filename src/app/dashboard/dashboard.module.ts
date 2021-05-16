import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardOneComponent } from './DashboardOne/DashboardOne.component';
import { DashboardTwoComponent } from './DashboardTwo/DashboardTwo.component';
import { DashboardRoutes } from './dashboard.routing';
import { GlobalModule } from '../globalFrontendComponents/global.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule.forChild(DashboardRoutes),
  ],
  declarations: [ 
     DashboardOneComponent,
     DashboardTwoComponent
   ]
})

export class DashboardModule {}
