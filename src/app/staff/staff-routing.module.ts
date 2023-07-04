import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { staffRoutes } from './routes';

@NgModule({
  imports: [RouterModule.forChild(staffRoutes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
