import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollComponent } from './enroll/enroll.component';
import { WildcardEntryComponent } from './wildcard-entry/wildcard-entry.component';
import { SpecialCaseComponent } from './special-case/special-case.component';
import { LabChangeComponent } from './lab-change/lab-change.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'enroll', component: EnrollComponent },
  { path: 'wildcard-entry', component: WildcardEntryComponent },
  { path: 'special-case', component: SpecialCaseComponent },
  { path: 'lab-change', component: LabChangeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
