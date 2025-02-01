import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollComponent } from './enroll/enroll.component';
import { WildcardEntryComponent } from './wildcard-entry/wildcard-entry.component';
import { SpecialCaseComponent } from './special-case/special-case.component';
import { LabChangeComponent } from './lab-change/lab-change.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EnrollComponent,
    WildcardEntryComponent,
    SpecialCaseComponent,
    LabChangeComponent,
    PortfolioComponent,
    FacultyComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
