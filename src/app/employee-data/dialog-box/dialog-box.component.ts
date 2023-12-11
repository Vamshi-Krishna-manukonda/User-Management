import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  empForm!: FormGroup;
  ActionBtn: string = 'Save';
  public genderlist = ['Female', 'Male', 'Others'];
  public empCategory = ['SoftwareDeveloper', 'HumanResource', 'Administration', 'Financial'];
  public TaskDetails = ['Assigned', 'UnAssigned','InProgress','Completed'];
  constructor(public empfb: FormBuilder,
    private _empservice: EmployeeService,
    private dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    public notificationService:NotificationService) { }

  ngOnInit(): void {
    this.empForm = this.empfb.group({
      empName: ['',[Validators.required,Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      mobileNO: ['',[Validators.required,Validators.minLength(10)]],
      gender: [''],
      category: ['',Validators.required],
      Taskstatus: [''],
      Task: ['']
    })
    // setValues for update
    // console.log(this.editData);
    
    if (this.editData) {
      this.ActionBtn = 'Update'
      this.empForm.controls['empName'].setValue(this.editData.empName);
      this.empForm.controls['email'].setValue(this.editData.email);
      this.empForm.controls['password'].setValue(this.editData.password);
      this.empForm.controls['mobileNO'].setValue(this.editData.mobileNO);
      this.empForm.controls['gender'].setValue(this.editData.gender);
      this.empForm.controls['category'].setValue(this.editData.category);
      this.empForm.controls['Taskstatus'].setValue(this.editData.Taskstatus);
      this.empForm.controls['Task'].setValue(this.editData.Task);
    }
    
    console.log(this.empForm.value);
  }
  get f():{[key:string]:AbstractControl}{
    return this.empForm.controls;
  }

  // get category(){
  //   return this.empForm.get('category');
  // }

  // postData
  addEmp() {
    if (!this.editData) {
      if (this.empForm.valid) {
        this._empservice.postEmp(this.empForm.value).subscribe(
          {
            next: (res: any) => {
              // alert('postdata Success');c
              this.empForm.reset();
              this.dialogRef.close('Save');
              this.notificationService.Sucess('Record success fully Posted')
            }, error: (err: any) => {
              alert('error while post data');
            }
          }
        )
      }
    } else {
      this.updateEmp();
    }
  }

  // updateEmp
  updateEmp() {
if(this.empForm.valid){
  this._empservice.putdateEmp(this.empForm.value, this.editData.id).subscribe(
    {
      next: (res: any) => {
        console.log(res);
        
        // alert('updare successfully')
        this.empForm.reset();
        this.dialogRef.close('Update');
        this.notificationService.update('update Sucessfully')
      }, error: () => {
        alert('error while update');
      }
    }
  )
}
  }
}
