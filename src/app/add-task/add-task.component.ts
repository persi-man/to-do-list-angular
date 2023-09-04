import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskTitle: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addTask(): void {
    if (this.taskTitle.trim()) {
      this.todoService.addTask(this.taskTitle);
      this.taskTitle = '';
    }
  }
}
