import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //String interpolation - {{aim}} in html file
 aim = "Your perfect banking partner";

//property binding [placeholder] = "account"
 account = "Enter your account here";

 acno='';
 pswd='';

  //(3rd execution) ----------------------------------------------------------------3rd
//class - collection of properties and methods
//properties/variables
//userdefined methods (4th execution) -------------------------------------------------------4th



  constructor(private ds:DataService,private router:Router) { //(1st execution) ----------------------------------1st
    //It automatically invokes when object is created.
   }
       
  ngOnInit(): void { //(2nd execution) --------------------------------------2nd
    //FOr inital process of component
    //Lifecycle hook of Angular
  }

 
  acnoChange(event:any){
    console.log(event.target.value);
    
    this.acno=event.target.value;
    console.log(this.acno);
    

  }

  pswdChange(event:any){
    console.log(event.target.value);
    
    this.pswd=event.target.value;
    console.log(this.pswd);
    

  }
  // login(a:any,p:any){
  //  // alert('Login clicked');
  //  var acno = a.value;
  //  var pswd = p.value;
  //  var userDetails = this.userDetails;

  //  if(acno in userDetails){
  //   if(pswd==userDetails[acno]['password']){
  //     alert('Login successful');
  //   }
  //   else{
  //     alert("Invalid user details");
  //   }
  //  }



   
  // }
  login(){
    // alert('Login clicked');
    var acno = this.acno;
    var pswd = this.pswd;
    var userDetails = this.ds.userDetails;

 const result = this.ds.login(acno,pswd)
 if(result){
  alert('Login successful');
  this.router.navigateByUrl('dashboard');
 }
 else{
  alert("Invalid password");
 }
 
  }
}
    // if(acno in userDetails){
    //  if(pswd==userDetails[acno]['password']){
    //    alert('Login successful');
    //    this.router.navigateByUrl('dashboard');
    //  }
    //  else{
    //    alert("Invalid password");
    //  }
    // }
    // else{
    //   alert("Invalid user details")
    // }
 
 
 
    
   



