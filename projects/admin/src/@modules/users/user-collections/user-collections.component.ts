import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'material/src/lib/material.module';
import { Router } from '@angular/router';
import { User } from 'projects/admin/src/@core/domain/user';
import { UserService } from 'projects/admin/src/@core/services/user.service';

@Component({
  selector: 'app-user-collections',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './user-collections.component.html',
  styleUrls: ['./user-collections.component.scss']
})
export class UserCollectionsComponent implements OnInit, OnDestroy {
  users!: User[];
  dataSource!: MatTableDataSource<User>;
  private destroySubject = new Subject<void>();
  displayedColumns = ['id', 'name', 'action'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  totalRecords: number = 0;
  pageSize: number = 5;


  constructor(private _userService: UserService, private readonly router: Router) { }

  ngOnInit(): void {
    this.findAllUsers();
  }

  findAllUsers(): void {
    this._userService.findAll().pipe(takeUntil(this.destroySubject)).subscribe({
      next: (users) => {
        this.users = users;
        this.dataSource = new MatTableDataSource(this.users);
        this.totalRecords = this.dataSource.data.length;
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  onPaginateChange(event: any) {
    if (event.pageIndex == Math.ceil(this.totalRecords / this.pageSize) - 1) {
      let apiRes = this.users;
      let oldRes = this.dataSource.data;
      let newRes = [...oldRes, ...apiRes];

      this.dataSource = new MatTableDataSource(newRes);
      this.totalRecords = this.dataSource.data.length;
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  edit(id: string) {
    this.router.navigateByUrl('/edit/' + id);
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
