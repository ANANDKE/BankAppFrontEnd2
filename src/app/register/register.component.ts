import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname="";
  acno="";
  pswd="";

  //register model
  registerForm = this.fb.group({ //group
    uname:[''], //array
    acno:[''],
    pswd:['']
  })
  //control - ts file model link to html file 

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    //alert("register clicked");
    console.log(this.registerForm);
    
    var username = this.registerForm.value.uname;
    var password = this.registerForm.value.pswd;
    var acno = this.registerForm.value.acno;
    const result = this.ds.register(acno,username,password);
    if(result){ //true
      alert(' sucess');
      this.router.navigateByUrl(''); // goes to login page
    }
     else{
      alert('failed');
      this.router.navigateByUrl('');


      
    }

  }
}
