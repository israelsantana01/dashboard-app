import { PostsPage } from './posts.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: PostsPage
  }
];

@NgModule({
  declarations: [
    PostsPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class PostsModule {

}
