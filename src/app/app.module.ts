import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/localize/init';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModulesModule } from './modules/modules.module';
import { MainHeaderComponent } from './modules/main-header/main-header.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.modules';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
