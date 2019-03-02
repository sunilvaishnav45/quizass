import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionComponent } from './instruction/instruction.component';
import { QuestionComponent } from './question/question.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ShowresultComponent } from './showresult/showresult.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionComponent,
    QuestionComponent,
    ErrorpageComponent,
    ShowresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
