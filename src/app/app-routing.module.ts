import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';
import { CalculateViewComponent } from './components/calculateview/calculateview.component';
import { Calculateview2Component } from './components/calculateview2/calculateview2.component';
import { Calculateview3Component } from './components/calculateview3/calculateview3.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'calculate', component: CalculateViewComponent },
  { path: 'calculate2', component: Calculateview2Component },
  { path: 'calculate3', component: Calculateview3Component },
  { path: 'clients', component: ClientsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'header', component: HeaderToolbarComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
