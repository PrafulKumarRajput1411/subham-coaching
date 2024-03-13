import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { AboutPageComponent } from './modules/about-page/about-page.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'blog', loadChildren: () => import('./modules/blogs/blogs.module').then(m => m.BlogsModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
