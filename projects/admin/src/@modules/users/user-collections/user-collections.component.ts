import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'material/src/lib/material.module';
import { User } from 'projects/admin/src/@core/domain/user';
import { UserService } from 'projects/admin/src/@core/services/user.service';

@Component({
  selector: 'app-user-collections',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './user-collections.component.html',
  styleUrls: ['./user-collections.component.scss']
})
export class UserCollectionsComponent implements OnInit, AfterViewInit {
  users!: User[];
  dataSource!: MatTableDataSource<User>;
  displayedColumns = ['id', 'name', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _userService: UserService) {

  }



  ngOnInit(): void {
    this.findAllUsers();
  }

  findAllUsers(): void {
    this._userService.findAll().subscribe(users => {
      console.log(users);
      this.users = users;
      this.dataSource = new MatTableDataSource(this.users);
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
