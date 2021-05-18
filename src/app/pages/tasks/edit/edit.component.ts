import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  type = false
  
  data:any  

  id

  constructor( private _active:ActivatedRoute , private _task:TasksService) { 

    this.id = this._active.snapshot.paramMap.get('id');
    
    
    this.data = this._task.getSingleTask(this.id)
  }

  ngOnInit(): void {
  }

}
