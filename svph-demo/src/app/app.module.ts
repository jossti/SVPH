import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { HelpComponent } from './help/help.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthService } from './services/auth.service';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeesComponent } from './employees/employees.component';
import { InvoicesComponent } from './invoices/invoices.component';
const appRoutes: Routes = [
  {path: "start", component: StartComponent},
  {path: "register", component: RegisterComponent},
  {path: "search", component: SearchComponent},
  {path: "help", component: HelpComponent},
  {path: "profile", component: ProfileComponent},
  {path: "employee", component: EmployeeComponent},
  {path: "customer", component: CustomerComponent},
  {path: "admin", component: AdminComponent},
  {path: "employees", component: EmployeesComponent},
  {path: "invoices", component: InvoicesComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RegisterComponent,
    SearchComponent,
    HelpComponent,
    NavbarComponent,
    ProfileComponent,
    CustomerComponent,
    EmployeeComponent,
    AdminComponent,
    EmployeesComponent,
    InvoicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
