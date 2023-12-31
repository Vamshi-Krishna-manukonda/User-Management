import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { angularMaterialModule } from 'src/Angular-Material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EmployeeDataModule } from './employee-data/employee-data.module';

@NgModule({
  declarations: [
    AppComponent,
    UserSignUpComponent,
    UserLoginComponent,
    EmployeeDetailsComponent,
    DeleteDialogComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeeDataModule
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
