import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookDemoSessionComponent } from './book-demo-session/book-demo-session.component';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { AboutHeaderComponent } from './about/about-header/about-header.component';
import { AboutBodyComponent } from './about/about-body/about-body.component';
import { AboutDetailComponent } from './about/about-detail/about-detail.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    MainSliderComponent,
    // MainHeaderComponent,
    HomePageComponent,
    ServicesComponent,
    FooterComponent,
    CoursesComponent,
    AboutHeaderComponent,
    AboutBodyComponent,
    AboutDetailComponent,
    ContactUsComponent,
    TestimonialsComponent,
    BookDemoSessionComponent,
  ],
  imports: [
    CommonModule,
    // SocialLoginModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
  ]
})
export class ModulesModule { }
