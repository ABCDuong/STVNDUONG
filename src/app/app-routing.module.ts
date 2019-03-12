import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

import { SnapClinicalComponent } from './snap-clinical/snap-clinical.component';
import { StemImmuneComponent } from './stem-immune/stem-immune.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent },
  { path: 'work', component:  WorksComponent },
  { path: 'contact', component:  ContactComponent },
  { path: 'snapClinical', component:  SnapClinicalComponent },
  { path: 'StemImmune', component:  StemImmuneComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
