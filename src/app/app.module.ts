import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { CalculateViewComponent } from './components/calculateview/calculateview.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { Calculateview2Component } from './components/calculateview2/calculateview2.component';
import { Calculateview3Component } from './components/calculateview3/calculateview3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ResultsComponent,
    CalculateViewComponent,
    ClientsComponent,
    ProfileComponent,
    NotfoundComponent,
    SidebarComponent,
    HeaderToolbarComponent,
    LandingPageComponent,
    Calculateview2Component,
    Calculateview3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
