import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';



@NgModule({
  declarations: [
    MainSliderComponent,
    // MainHeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    ServicesComponent,
    FooterComponent,
    CoursesComponent,
    ContactUsComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
  ]
})
export class ModulesModule { }