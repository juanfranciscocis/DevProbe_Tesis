import {Component, inject, OnInit} from '@angular/core';
import {getGenerativeModel, VertexAI} from "@angular/fire/vertexai-preview";

@Component({
  selector: 'app-ai',
  templateUrl: './ai.page.html',
  styleUrls: ['./ai.page.scss'],
})
export class AiPage implements OnInit {
  question: string | undefined;
  private vertexAI:VertexAI = inject(VertexAI);
  answer: string | undefined;


  constructor() { }

  ngOnInit() {
  }

  askQuestionNow() {
    const model = getGenerativeModel(this.vertexAI, {model: "gemini-1.5-flash"});
    model.generateContent(this.question!).then(response => {
      console.log(response.response.text());
      this.answer = response.response.text();
    });





  }

}
