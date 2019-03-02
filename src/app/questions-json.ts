import { QuestionOptions } from "./question-options";

export class QuestionsJson {

    public _questionNo: number;//Question number
    
    public _question: String;//Question 

    public _correctOption: number;//Correct answer

    public _selectedOption: number;//selected option

    public _options: QuestionOptions;//Options 
    
    public getQuestionNo(): number {
        return this._questionNo;
    }
    public setQuestionNo(value: number) {
        this._questionNo = value;
    }

    public getQuestion(): String {
        return this._question;
    }
    public setQuestion(value: String) {
        this._question = value;
    }

    public getOptions(): QuestionOptions {
        return this._options;
    }
    public setOptions(value: QuestionOptions) {
        this._options = value;
    }

    
    public getCorrectOption(): number {
        return this._correctOption;
    }
    public setCorrectOption(value: number) {
        this._correctOption = value;
    }

    public getSelectedOption(): number {
        return this._selectedOption;
    }
    public setSelectedOption(value: number) {
        this._selectedOption = value;
    }

}
