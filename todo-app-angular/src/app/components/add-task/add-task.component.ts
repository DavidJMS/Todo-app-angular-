import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

	task = {
	    title: '',
	    description: '',
	    completed: false
	  };

	submitted = false;

  	constructor(private taskService:TaskService) { }

	ngOnInit(): void {}

	saveTask() {
	    const data = {
	      title: this.task.title,
	      description: this.task.description,
	      completed: false
	    };

		this.taskService.create(data)
	      .subscribe(
	        response => {
	          console.log(response);
	          this.submitted = true;
	        },
	        error => {
	          console.log(error);
	        });
  	}

  	newTask() {
	    this.submitted = false;
	    this.task = {
	      title: '',
	      description: '',
	      completed: false
	    };
	}
}
