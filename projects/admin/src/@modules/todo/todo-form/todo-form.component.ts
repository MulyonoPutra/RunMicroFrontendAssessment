import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { InputFieldComponent } from 'projects/admin/src/@shared/components/input-field/input-field.component';
import { MaterialModule } from 'material/src/lib/material.module';
import { Todo } from 'projects/admin/src/@core/domain/todo';
import { TodoService } from 'projects/admin/src/@core/services/todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, InputFieldComponent],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  protected form!: FormGroup;
  todoId!: string

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
  ) {
    this.todoId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.initForms();
    this.findById();
  }

  protected findById() {
    this.todoService.findById(this.todoId).subscribe({
      next: (response) => {
        this.prepopulateForms(response);
      },
    });
  }

  protected initForms(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      userId: ['', Validators.required],
      title: ['', Validators.required],
      completed: [false, Validators.required],
    });
  }

  protected prepopulateForms(todo: Todo): void {
    this.form.patchValue({
      id: todo.id,
      userId: todo.userId,
      title: todo.title,
      completed: todo.completed,
    });
  }

  protected save(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.todoService.create(this.form.value).subscribe({
        next: () => {
          // this.router.navigate(['/']);
        },
      });
    }
  }

  protected update(): void {
    if (this.form.valid) {
      this.todoService.update(this.todoId, this.form.value).subscribe({
        next: () => {
          // this.router.navigate(['/']);
        },
      });
    }
  }

  protected submit() {
    this.todoId ? this.update() : this.save();
  }

}
