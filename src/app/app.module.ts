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
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
// const config = new SocialAuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('YOUR_GOOGLE_CLIENT_ID')
//   }
// ]);
@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    // HomePageComponent
  ],
  imports: [
    BrowserModule,
    // ModulesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    SocialLoginModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      // getQuoteService,
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(

              /**client api key */
              '138887248956 - jkcaambv0r83jgop0vd6kr0lm6poc85q.apps.googleusercontent.com'
              // '290369982684 - i5tufsfq83pnbkdobl76ab0pff7neadj.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    },
    // { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
