import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: Task[] = [];

  addTask(title: string): void {
    const newTask = new Task(this.tasks.length + 1, title);
    this.tasks.push(newTask);
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getTasks(): Task[] {
    return this.tasks;
  }
  updateTask(updatedTask: Task): void {
    const existingTaskIndex = this.tasks.findIndex(task => task.id === updatedTask.id);

    if (existingTaskIndex !== -1) {
      this.tasks[existingTaskIndex] = updatedTask;
    }
  }
}

