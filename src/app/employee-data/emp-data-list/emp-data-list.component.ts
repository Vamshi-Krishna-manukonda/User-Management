import { Component, Inject, OnInit, ViewChild, } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DeleteDialogService } from 'src/app/services/delete-dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-data-list',
  templateUrl: './emp-data-list.component.html',
  styleUrls: ['./emp-data-list.component.css']
})
export class EmpDataListComponent implements OnInit {


  displayedColumns: string[] = ['EmpName', 'Email', 'MobileNo','Taskstatus', 'Designation', 'Task', 'Actions'];
  dataSource!: MatTableDataSource<any>
  searchKey!: string;
  @ViewChild(MatPaginator) Paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(DialogBoxComponent) dialogcomponent!: DialogBoxComponent;

  constructor(private dialog: MatDialog,
    private _empServe: EmployeeService,
    private _notificationserv: NotificationService,
    private _deldialogserv: DeleteDialogService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.getEmployee();

  }
  // for formopen
  openDialog() {
    this.dialog.open(DialogBoxComponent, {
      width: '59%',
    }).afterClosed().subscribe(val => {
      if (val === 'Save') {
        this.getEmployee();
      }
    })
  }
  // getempdata
  getEmployee() {
    this._empServe.getEmp().subscribe(
      {
        next: (res) => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.Paginator;
          this.dataSource.sort = this.sort;
        },
        error(err) {
          alert("err while getting")
        }
      }
    )
  }
  //logout
  logout(){
    this.route.navigate(['/login'])
  }
  // filter the data
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //  editdata
  editEmp(row: any) {
    this.dialog.open(DialogBoxComponent, {
      width: '59%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === "Update") {
        this.getEmployee();
      }
    })
  }
  delete(id: number) {
    this._deldialogserv.openConfirmdialog().afterClosed().subscribe(
      (res) => {
        if (res) {
          this._empServe.deleteEmp(id).subscribe(
            {
              next: (res) => {
                this._notificationserv.warn('Record deleted');
                this.getEmployee();
              },
              error(err) {
                alert('error while deleted')
              }
            }
          )
        }
      }
    )

  }

  onClear() {
    this.searchKey = ""
  }


}
