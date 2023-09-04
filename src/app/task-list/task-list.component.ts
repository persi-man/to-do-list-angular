import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  selectedState: string = 'To do';

  constructor(private todoService: TodoService) {}gitg

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks();
  }

  removeTask(id: number): void {
    this.todoService.removeTask(id);
    this.tasks = this.todoService.getTasks();
  }


  updateTask(task: Task): void{
    const newTitle = window.prompt('Modifier la tâche', task.title);
    if (newTitle !== null) {
      const updatedTask = { ...task, title: newTitle };
      this.todoService.updateTask(updatedTask);
      this.ngOnInit();
    }
  }
  updateTaskState(task: Task, newState: string): void {
    task.state = newState;
    this.todoService.updateTask(task);
    this.ngOnInit();
  }
}
