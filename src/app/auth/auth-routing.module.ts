import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { authRoutes } from './router';

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
