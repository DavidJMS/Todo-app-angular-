import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  currentTask = null;
  message = '';

  constructor(
  	private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  	this.message = '';
    this.getTask(this.route.snapshot.paramMap.get('id'));
  }

  getTask(id) {
    this.taskService.get(id)
      .subscribe(
        data => {
          this.currentTask = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTaskStatus(status) {
    const data = {
      title: this.currentTask.title,
      description: this.currentTask.description,
      completed: status
    };

    this.taskService.update(this.currentTask.id, data)
      .subscribe(
        response => {
          this.currentTask.completed = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTask() {
    this.taskService.update(this.currentTask.id, this.currentTask)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Editado correctamente!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTask() {
    this.taskService.delete(this.currentTask.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tasks']);
        },
        error => {
          console.log(error);
        });
  }

}
