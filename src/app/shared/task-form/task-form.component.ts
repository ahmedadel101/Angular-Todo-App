import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() Type:boolean
  @Input()  data:any
 
  
  constructor( private _task:TasksService , private _router:Router , private _active:ActivatedRoute) { }

  ngOnInit(): void {
  }

  addData(data){
     this._task.addTask(data.value)
    console.log(data.value);
     this._router.navigateByUrl('allTasks')
  }
  editData(data){
    
    this._task.editTask(data.value ,this._active.snapshot.paramMap.get('id') )
    this._router.navigateByUrl('allTasks')
    console.log(data.value);

  }

}
