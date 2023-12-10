import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }
  constructor(public matSnackBar: MatSnackBar) { }
  Sucess(message: any) {
    this.config['panelClass'] = ['notification', 'success'];
    this.matSnackBar.open(message, 'Ok', this.config)
  }
  update(message: any) {
    this.config['panelClass'] = ['notification', 'Success'];
    this.matSnackBar.open(message, 'ok', this.config)
  }
  warn(message:any){
    this.config['panelClass']=['notification','warn'];
    this.matSnackBar.open(message,'ok',this.config)
  }
}
