import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  
  private javascriptQuizLink = "assets/javascript.json";
  public questions;
 public selectedAnswer : string = '';
 count : number =1;
  

  

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.javascriptQuizLink).subscribe(data => {
      console.log(data);
      this.questions = data;
      
       
    }, err =>{
      console.log(err);
    })
  }

  radioChangeHandler(event : any){
      this.selectedAnswer = event.target.value;
      console.log(this.selectedAnswer);
      
  }
  
}
