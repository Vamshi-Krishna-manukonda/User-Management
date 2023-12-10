import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpDataListComponent } from './emp-data-list/emp-data-list.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { angularMaterialModule } from 'src/Angular-Material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {employeeDataComponent } from './employee-data.component';

@NgModule({
  declarations: [
    DialogBoxComponent,
    EmpDataListComponent,
    employeeDataComponent
  ],
  imports: [
    CommonModule,
    angularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

  ]
})
export class EmployeeDataModule { }
