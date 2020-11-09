import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizComponent } from '../quiz/quiz.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

 public emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  constructor( private route : Router){

  }

  ngOnInit(){}
  
  onSubmit(email:string, username:string){
     
     console.log(email, username);
     
     this.route.navigate(['/quiz']);
  }
}
