import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { InstructionComponent } from './instruction/instruction.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ShowresultComponent } from './showresult/showresult.component';

const routes: Routes = [
  {path:'',redirectTo:'instruction',pathMatch:"full"},
  {path:'instruction',component:InstructionComponent},
  {path:'q/:no',component:QuestionComponent},
  {path:'result',component:ShowresultComponent},
  {path:'error',component:ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
