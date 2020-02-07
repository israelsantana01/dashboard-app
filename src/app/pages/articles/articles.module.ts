import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { ArticlesPage } from './articles.page';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ArticlesPage
  }
];

@NgModule({
  declarations: [
    ArticlesPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})

export class ArticlesModule {

}
