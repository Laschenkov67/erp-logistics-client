import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';


@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
