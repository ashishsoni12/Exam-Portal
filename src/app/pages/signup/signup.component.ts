import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent 
{
  constructor( private UserService:UserService,private snake:MatSnackBar){}

  public user={
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

  };

    formSubmit()
    {
      
      if(this.user.userName==''||this.user.userName == null)                       //validation
      {
        this.snake.open("Username is required!!",'ok');
        return;
      }
      console.log(this.user);
      //addUser:userservice
      this.UserService.addUser(this.user).subscribe((data)=> {                   //confirmation alert
        //succes
        console.log(data);
        //alert("successfully register");
        Swal.fire('Success','user is registered');
      },(error)=> {
        //error
        console.log(error);
        alert("something went wrong");
      });

    }



}
