import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from '../question-service.service';
import { QuestionsJson } from '../questions-json';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public questionNo;//Will be used to fetch Id from URL,Current question
  public nextQuestion; //Will be used to store next question id,upcoming question
  public showNextBtn:boolean=false;//Will be used show next button 
  public question : QuestionsJson;//Use to store question object
  public selopt : boolean = true;

  constructor(private roter : ActivatedRoute,private que : QuestionServiceService, private fb :FormBuilder) { }

  ngOnInit() {
    this.questionNo =this.roter.snapshot.paramMap.get("no");
    if(this.questionNo > 10){
        window.location.href = "/error";
    }else{
      //getting question
      this.question = this.que.getPopulatedQuestionForId(parseInt(this.questionNo));
      this.nextQuestion = parseInt(this.questionNo)+1;
      if(this.nextQuestion<=10){
        this.showNextBtn = true;
      }
    }

  }

  /**
   * First this method will check user select valid option <br>
   * If option is not selected will propt a message to select the option <br>
   * This method will be used to store actioned question in local storage<br>
   * Before sending in local storage, will set selected option in Question Object <br>
   * @param selopt 
   */
  public showNextQuestion(selopt){
    if(selopt!=null && selopt <= 4 && selopt >= 1){
      console.log(this.question.getCorrectOption())//correct option
      console.log(selopt)//selected option
      this.question.setSelectedOption(selopt);//setting selected option
      localStorage.setItem(this.question.getQuestionNo()+"", JSON.stringify(this.question));
      window.location.href = "/q/"+this.nextQuestion;
    }else{
      alert("Please select a valid option..!");
    } 
  }

  /**
   * Method will be used to navigate to result page
   */
  public showResult(selopt){
    if(selopt!=null && selopt <= 4 && selopt >= 1){
      console.log(this.question.getCorrectOption())//correct option
      console.log(selopt)//selected option
      this.question.setSelectedOption(selopt);//setting selected option
      localStorage.setItem(this.question.getQuestionNo()+"", JSON.stringify(this.question));
      window.location.href = "/result";
    }else{
        alert("Please select a valid option..!");
    } 
  }

}
