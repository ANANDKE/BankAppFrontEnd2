import { Component, OnInit } from '@angular/core';
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

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  register(){
    //alert("register clicked");
    var username = this.uname;
    var password = this.pswd;
    var acno = this.acno;
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
