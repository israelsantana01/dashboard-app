import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class DashboardModule {

}
