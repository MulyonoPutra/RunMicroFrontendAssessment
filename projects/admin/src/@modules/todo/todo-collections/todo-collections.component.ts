import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MaterialModule } from 'material/src/lib/material.module';
import { Todo } from 'projects/admin/src/@core/domain/todo';
import { TodoService } from 'projects/admin/src/@core/services/todo.service';

@Component({
  selector: 'app-todo-collections',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './todo-collections.component.html',
  styleUrls: ['./todo-collections.component.scss']
})
export class TodoCollectionsComponent implements OnInit, OnDestroy {
  private destroySubject = new Subject<void>();
  public todos!: Todo[];
  public dataSource!: MatTableDataSource<Todo>;
  public displayedColumns = ['id', 'userId', 'title', 'action'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  totalRecords: number = 0;
  pageSize: number = 5;

  constructor(private _todoService: TodoService, private readonly router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this._todoService.findAll().pipe(takeUntil(this.destroySubject)).subscribe({
      next: (todo) => {
        this.todos = todo;
        this.dataSource = new MatTableDataSource(this.todos);
        this.totalRecords = this.dataSource.data.length;
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  onPaginateChange(event: any) {
    if (event.pageIndex == Math.ceil(this.totalRecords / this.pageSize) - 1) {
      let apiRes = this.todos;
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
    console.log(id);
    this.router.navigateByUrl('/todo-form/' + id);
  }

  delete(id: string) {
    this._todoService.remove(id).pipe(takeUntil(this.destroySubject))
      .subscribe({
        next: () => {
          alert('Delete Successful');
        },
        error: (err: any) => {
          console.error(err);
        },
        complete: () => {
          this.findAll();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
