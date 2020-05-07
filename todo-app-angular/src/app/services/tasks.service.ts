import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8000/api/task/';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${baseUrl}get/all`);
  }

  get(id) {
    return this.http.get(`${baseUrl}get/${id}`);
  }

  create(data) {
  	console.log('error');
    return this.http.post(`${baseUrl}new/`, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}edit/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}delete/${id}`);
  }

  deleteAll() {
    return this.http.delete(`${baseUrl}delete/all`);
  }

  findByTitle(data) {
    return this.http.post(`${baseUrl}get/all/filter`, data);
  }
}