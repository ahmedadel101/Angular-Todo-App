import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  tasks:any
  constructor(private _tasks:TasksService) { }
  
  deleteTask(index){
    this._tasks.deleteTask(index)
  }

  ngOnInit(): void {
    this.tasks = this._tasks.allTasks()

   
  }

}
