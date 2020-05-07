import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tasks', component: TasksListComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: 'add', component: AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }