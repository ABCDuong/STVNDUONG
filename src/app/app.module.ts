import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkCardComponent } from './work-card/work-card.component';
import { SnapClinicalComponent } from './snap-clinical/snap-clinical.component';
import { StemImmuneComponent } from './stem-immune/stem-immune.component';


import { NgxCarousel3dModule } from 'ngx-carousel-3d';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    ContactComponent,
    NavbarComponent,
    WorkCardComponent,
    SnapClinicalComponent,
    StemImmuneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatButtonModule,
    NgxCarousel3dModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
