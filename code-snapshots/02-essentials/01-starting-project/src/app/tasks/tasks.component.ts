import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service'
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NewTaskComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name!: string;
  @Input() userId!: string;
  isAddingTask = false
  constructor(private tasksService: TasksService) { }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }
  onCompleteTask(id: string) {
  }
  onStartAddTask() {
    this.isAddingTask = true
  }
  onCloseAddTask() {
    this.isAddingTask = false
  }
}
