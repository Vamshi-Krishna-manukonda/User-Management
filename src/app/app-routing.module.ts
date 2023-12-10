import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AppComponent } from './app.component';
import { employeeDataComponent } from './employee-data/employee-data.component';
import { EmpDataListComponent } from './employee-data/emp-data-list/emp-data-list.component';

const routes: Routes = [
  { path: "", component: UserLoginComponent },
  {
    path: "employee", component: employeeDataComponent,
    children: [
      { path: "emplist", component: EmpDataListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
