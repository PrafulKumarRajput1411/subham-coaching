import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/localize/init';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModulesModule } from './modules/modules.module';
import { MainHeaderComponent } from './modules/main-header/main-header.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.modules';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    // HomePageComponent
  ],
  imports: [
    BrowserModule,
    // ModulesModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
