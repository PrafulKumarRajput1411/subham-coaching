import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogDetailPageComponent } from './blog-detail-page/blog-detail-page.component';
import { BlogCommentsComponent } from './blog-comments/blog-comments.component';

const router: Routes = [
  { path: '', component: BlogPageComponent }
]

@NgModule({
  declarations: [
    BlogDetailPageComponent,
    BlogCommentsComponent
  ],
  imports: [
    RouterModule.forChild(router),
    CommonModule
  ]
})
export class BlogsModule { }
