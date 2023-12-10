import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteDialogService {

  constructor(private _matdialog:MatDialog) { }
  openConfirmdialog(){
  return  this._matdialog.open(DeleteDialogComponent,{
      position:{top:'10px'},
      width:"400px",
      disableClose:true,
      panelClass:'confirmdialog',
     
    })
  }
}
