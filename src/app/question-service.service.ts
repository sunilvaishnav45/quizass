import { Injectable } from '@angular/core';
import { QuestionsJson } from './questions-json';
import { QuestionOptions } from './question-options';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor() { }

  /**
   * Based on questionId this method will return question
   * @param questionId 
   */
  getPopulatedQuestionForId(questionId) : QuestionsJson{
    var populatedQue =  new QuestionsJson();
    if(questionId<=10){
      var populatedQues : QuestionsJson[]  = this.getAllPopulatedQuestions();
      populatedQues.forEach(function(que){
          if(questionId==que.getQuestionNo()){ 
            populatedQue =  que;
          }
      });
    }
    return populatedQue;
  };
  
  /**
   * This method will be used to populate all the question <br>
   * After populating question will return all populated questions <br>
   * will call getPopulatedQuestionOptionFor() and 
   */
  getAllPopulatedQuestions() : QuestionsJson[]{
    var ques : QuestionsJson[];//Will be used to populated all the questions
    ques = [this.getPopulatedQuestionFor(1,"19 + ……. = 42",1,"23","61","0","42"),
    this.getPopulatedQuestionFor(2,"What is the symbol of pi?",2," €","π","Ω","∞"),
    this.getPopulatedQuestionFor(3,"Arrange the numbers in ascending order:",3, "36, 12, 29, 21, 7."," 7, 12, 21, 29, 36 ","36, 29, 21, 12, 7","None"),
    this.getPopulatedQuestionFor(4,"What is the greatest two digit number?",2,"10","90","11","50"),
    this.getPopulatedQuestionFor(5,"How much is 90 – 19?",1,"71","50","11","61"),
    this.getPopulatedQuestionFor(6,"20 is divisible by ……… .",4,"3","7","9","None"),
    this.getPopulatedQuestionFor(7,"Find the value of x; if x = (2 × 3) + 11.",3,"55","18","17","16"),
    this.getPopulatedQuestionFor(8," What is the smallest three digit number?",1,"100","99","1000","500"),
    this.getPopulatedQuestionFor(9,"How much is 190 – 87 + 16?",4,"101","120","121","119"),
    this.getPopulatedQuestionFor(10,"What is 1000 × 1 equal to?",3,"100","1","1000","10000")]
    return ques;
  };

  /**
   * Will be used to populate question <br>
   * To populate option will call getPopulatedQuestionOptionFor method <br>
   * @param queno 
   * @param que 
   * @param correctopt 
   * @param opt1 
   * @param opt2 
   * @param opt3 
   * @param opt4 
   */
  getPopulatedQuestionFor(queno,que,correctopt,opt1,opt2,opt3,opt4) : QuestionsJson{
    var populatedQue = new QuestionsJson();
    populatedQue.setQuestionNo(queno);
    populatedQue.setQuestion(que);
    populatedQue.setCorrectOption(correctopt);
    populatedQue.setOptions(this.getPopulatedQuestionOptionFor(opt1,opt2,opt3,opt4));
    return populatedQue;
  };
  /**
   * This method will be used to populate Options for a question <br>
   * @param opt1 
   * @param opt2 
   * @param opt3 
   * @param opt4 
   */
  getPopulatedQuestionOptionFor(opt1,opt2,opt3,opt4) : QuestionOptions{
     var qOpts = new QuestionOptions();
     qOpts.setOption1(opt1);
     qOpts.setOption2(opt2);
     qOpts.setOption3(opt3);
     qOpts.setOption4(opt4);
    return qOpts;
  }
}
