import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  AdminLoginForm!: FormGroup;
  // admLoginDynamicArray: any = [];
  constructor(private ls: LoginService,
    private fb: FormBuilder,
    private route: Router) { }

  ngOnInit(): void {
    this.AdminLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
    // this.getLogInForm();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.AdminLoginForm.controls;
  }

  // getLogInForm() {
  //   this.ls.formControls().subscribe(
  //     res => {
  //       this.admLoginDynamicArray = res;
  //       this.createRegFormControls();
  //       console.log(this.admLoginDynamicArray);

  //     }
  //   )
  // }

  // createRegFormControls() {
  //   this.admLoginDynamicArray.forEach((element: any) => {
  //     this.AdminLoginForm.addControl(element.ID, new FormControl(''));
  //   });
  //   console.log(this.AdminLoginForm);
  // }

  Login() {
    this.ls.LoginAdmin().subscribe(
      res => {
        console.log(res);
        const user = res.find((a: any) => {
          return a.Email === this.AdminLoginForm.value.email && a.Password === this.AdminLoginForm.value.password
        });
        if (user) {
          alert('Login Succesful');
          this.AdminLoginForm.reset()
          this.route.navigate(['/employee/emplist']);
          // this.route.navigate(["home"])
        } else {
          alert("user not found")
        }
      }, err => {
        alert("Something went wrong")
      },
      )
    // const AdminLogin = res.find((a: any) => {
    //   if(a.Email === this.AdminLoginForm.value.Email && a.Password === this.AdminLoginForm.value.Password){
    //     return
    //   }
    // })
    // console.log(AdminLogin);
    // if (AdminLogin) {
    //   alert('loginSucess');
    //   this.AdminLoginForm.reset();
    //   localStorage.setItem("adminEmail", AdminLogin.Email);
    //   localStorage.setItem("adminPassword", AdminLogin.Password);
    //   localStorage.setItem("adminId", AdminLogin.id);
    //   this.route.navigate(['/dashboard']);
    // }
  }

}

