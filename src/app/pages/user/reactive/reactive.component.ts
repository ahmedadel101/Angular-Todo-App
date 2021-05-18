import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  myForm= new FormGroup({
    name: new FormControl('', [Validators.required , Validators.minLength(8)]),
    message: new FormControl('', [Validators.maxLength(100)]),
    email: new FormControl('',[Validators.required , Validators.email]),
    phone: new FormControl('', [Validators.maxLength(11)]),

  })

  constructor(private _reactive:UserService) { }

  contactUS(){
      console.log(this.myForm.valid);
      
    this._reactive.registerData(this.myForm.value).subscribe(data => {
      console.log(data);
      
    })
      
    
  }

  ngOnInit(): void {
  }

}
