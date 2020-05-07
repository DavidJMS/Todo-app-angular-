import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: any;
  currentTask = null;
  currentIndex = -1;
  title = '';

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  	this.retrieveTasks();
  }
  
  retrieveTasks() {
	this.taskService.getAll()
	.subscribe(
	    data => {
	    this.tasks = data;
	    console.log(data);
	    },
	    error => {
	    console.log(error);
	    });
  }

  searchTitle() {
  	const data = {
      title: this.title
    };
    this.taskService.findByTitle(data)
      .subscribe(
        data => {
          this.tasks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveTask(task, index) {
    this.currentTask = task;
    this.currentIndex = index;
  }

  refreshList() {
    this.retrieveTasks();
    this.currentTask = null;
    this.currentIndex = -1;
  }

  removeAllTasks() {
    this.taskService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTasks();
        },
        error => {
          console.log(error);
        });
  }

}
