import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //current user

  currentUser="";

  //current acno
  currentAcno="";

  constructor() { 
    this.getDetails(); 
  }

  //saveDetails() - to store data into localStorage
  saveDetails(){
    if(this.userDetails){
      localStorage.setItem('DataBase',JSON.stringify(this.userDetails))

    }
    if(this.currentUser){
      localStorage.setItem('currentUser',JSON.stringify(this.currentUser))

    }
    if(this.currentAcno){
      localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))

    }
  }

  //getDetails() - To get data from the local storage
  getDetails(){
    if(this.userDetails){
      this.userDetails=JSON.parse(localStorage.getItem('DataBase')|| '')
    }
    if(this.currentAcno){
      this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')|| '')
    }
    if(this.currentUser){
      this.currentUser=JSON.parse(localStorage.getItem('currentUser')|| '')
    }
  }

  //database...........
userDetails:any={
  1000:{acno:1000,username:'Richu',password:1000,balance:2000,transaction:[]},
  1001:{acno:1001,username:'Kichu',password:1001,balance:2000,transaction:[]},
  1002:{acno:1002,username:'Michu',password:1002,balance:2000,transaction:[]}
}
register(acno:any,username:any,password:any){
  let userDetails = this.userDetails
  if(acno in userDetails){
    return false;
  }
  else{
    userDetails[acno]={
      acno:acno,
      username:username,
      password:password,
      balance:0,
      transaction:[],

    }
    console.log(userDetails);
    this.saveDetails();

    return true;
    
  }

}

login(acno:any,pswd:any){
  let userDetails = this.userDetails
  if(acno in userDetails){
    if(pswd == userDetails[acno]['password']){
      this.currentUser = userDetails[acno]['username'];
      this.currentAcno = acno;
      this.saveDetails();
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }

}

deposit(acno:any,pswd:any,amt:any){
  let userDetails=this.userDetails;
  var amount = parseInt(amt);
  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      userDetails[acno]['balance'] +=amount;
      userDetails[acno]['transaction'].push({
        Type: "Credit",
        Amount: amount
      })
      console.log(userDetails);
      this.saveDetails();

      
      return userDetails[acno]['balance']
    }
    else{
      alert('password Incorrect');
      return false;
    }
  }
  else{
    alert("Invalid userDetails");
    return false;
  }

}

withdraw(acno:any,pswd:any,amt:any){
  let userDetails=this.userDetails;
  var amount = parseInt(amt);
  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      if(userDetails[acno]['balance']>amount){
        userDetails[acno]['balance'] -=amount;
        userDetails[acno]['transaction'].push({
          Type: "Debit",
          Amount: amount
        })
        console.log(userDetails);
      this.saveDetails();
        
      return userDetails[acno]['balance']


      }
      else{
        alert('Insufficient balance');
        return false;
      }
      
    }
    else{
      alert('password Incorrect');
      return false;
    }
  }
  else{
    alert("Invalid userDetails");
    return false;
  }


}

getTransaction(acno:any){
return this.userDetails[acno]['transaction']
}
}
