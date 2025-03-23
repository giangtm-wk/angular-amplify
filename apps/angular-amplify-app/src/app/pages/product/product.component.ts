import { DatePipe, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  inject,
  OnInit
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  Todo,
  TodoDataClientService,
} from '../../services/todo-data-client/todo-data-client.service';

@Component({
  selector: 'wk-product',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  todoDataClient = inject(TodoDataClientService);
  todos: Todo[] = [];
  isLoading = false;

  content = new FormControl('', [Validators.required]);
  cdr = inject(ChangeDetectorRef);

  async ngOnInit() {
    await this.getTodos();
  }

  async getTodos() {
    this.isLoading = true;
    const { data: todos, errors } = await this.todoDataClient.getTodoList();
    this.isLoading = false;
    console.log('todos@@', todos);
    if (errors) {
      console.error(errors);
      return;
    }
    this.todos = JSON.parse((todos as string) || '[]');
    this.cdr.markForCheck();
  }

  async updateTodo(id: string) {
    const { data: todos, errors } = await this.todoDataClient.updateTodo(
      id,
      'Updated title'
    );
    console.log('todos@@', todos);
    if (errors) {
      console.error(errors);
      return;
    }
    await this.getTodos();
  }
}
