import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AddTimeSlotComponent } from './add-time-slot/add-time-slot.component';
import { AdminGuardGuard } from 'src/app/guard/admin-guard/admin-guard.guard';
import { ClassComponent } from './class/class.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', redirectTo: '/admin/detail/admin-dashboard', pathMatch: 'full'
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'class', pathMatch: 'full' },
      { path: 'add-blog', component: AddBlogComponent, canActivate: [AdminGuardGuard] },
      { path: 'add-time-slot', component: AddTimeSlotComponent, canActivate: [AdminGuardGuard] },
      { path: 'class', component: ClassComponent },
      { path: 'testimonials', component: TestimonialsComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ClassComponent,
    TestimonialsComponent,
    AddTimeSlotComponent,
    AddBlogComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
