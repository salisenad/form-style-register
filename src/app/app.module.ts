import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SvgIconComponent } from './home/navbar/svg-icon/svg-icon.component';
import { FormToKnowBetterComponent } from './home/form-to-know-better/form-to-know-better.component';
import { GetInTouchViewComponent } from './home/get-in-touch-view/get-in-touch-view.component';
import { RightSideBackgroundComponent } from './home/get-in-touch-view/right-side-background/right-side-background.component';
import { FooterComponent } from './home/footer/footer.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SvgIconComponent,
    FormToKnowBetterComponent,
    GetInTouchViewComponent,
    RightSideBackgroundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
