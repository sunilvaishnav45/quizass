import { Component, OnInit } from '@angular/core';
import { QuestionsJson } from '../questions-json';

@Component({
  selector: 'app-showresult',
  templateUrl: './showresult.component.html',
  styleUrls: ['./showresult.component.css']
})
export class ShowresultComponent implements OnInit {

  constructor() { }

  public allAnsweredQues : QuestionsJson[]= [];
  public _correctAnswer: number = 0;

  public getCorrectAnswer(): number {
    return this._correctAnswer;
  }
  public setCorrectAnswer(value: number) {
    this._correctAnswer = value;
  }

  ngOnInit() {
    this.fetchAllResullFromLocalStorage();
    this.setCorrectAnswerCount();
  }

  /**
   * This method will used to fetch all the question being answered by user <br>
   * If local storage have less than 10 question it means user didn't complete test <br>
   * In that case user will be redirect to instruction page where user need to start the test again <br>
   * Else result will be shown to user <br>
   */
  fetchAllResullFromLocalStorage(){
    if(localStorage.length==10){
      for (var key in localStorage){
        var queJson = JSON.parse(localStorage.getItem(key));
        if(queJson!=null){
          this.allAnsweredQues.push(queJson);
        }
     } 
    }else{
      window.location.href = "/instruction"; 
    }
  }

  /**
   * Will be used to set count of correct answer
   */
  setCorrectAnswerCount(){
    var classObj =  new ShowresultComponent();
    classObj.setCorrectAnswer(0)
    this.allAnsweredQues.forEach(function(queJson){   
      if(queJson!=null){
        var correctOpt = queJson["_correctOption"];
        var selectedOpt  = queJson["_selectedOption"];
        var questionNo  = queJson["_questionNo"];
        if(selectedOpt==correctOpt && questionNo!=null){
          classObj.setCorrectAnswer(classObj.getCorrectAnswer()+1);
        }
      }
    });
    this._correctAnswer = classObj.getCorrectAnswer();
  }

}
