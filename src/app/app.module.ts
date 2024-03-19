import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/localize/init';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModulesModule } from './modules/modules.module';
import { MainHeaderComponent } from './modules/main-header/main-header.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.modules';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  GoogleSigninButtonModule
} from '@abacritt/angularx-social-login';
@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    GoogleSigninButtonModule,
    SocialLoginModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        authType: 'redirect',
        class: 'custom-google-login-button',
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '451680391714-7scph1d7eit1ftucn5q1455a52rc6hb1.apps.googleusercontent.com'
            ),
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
