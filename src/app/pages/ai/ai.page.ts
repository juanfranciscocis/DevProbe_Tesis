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


  model = getGenerativeModel(this.vertexAI, {model: "gemini-1.5-flash"});
  chat = this.model.startChat({
    history: [
      {
        role: "user",
        parts: [{text:"Hola, desde ahora en adelante quiero que seas un modelo experto en Software Quality Assurance y analista de datos"}],
      },
      {
        role: "model",
        parts: [{text:"Soy un modelo experto en Software Quality Assurance, de igual forma tengo un masterado en anlaítica de datos ¿En qué puedo ayudarte?"}],
      },
      {
        role: "user",
        parts: [{text:"Gracias, te voy a entregar un json con datos en unos minutos, necesito que lo analices y me des un resumen de los datos, este json contiene datos del uso de cpu, imagina que " +
            "que es un json donde se monitorea al servidor, tu analisis tiene que ser detallado, si encuentras inconsistencias en los datos, por favor mencionalas, en " +
            "caso de que creas que ocurrio un ataque cibernetico menciona el posible ataque, si crees que hay pocos datos para hacer un verdadero analisis mencionalo "}],
      },
      {
        role: "model",
        parts: [{text:"Claro, envíame el json y yo me encargo de analizarlo, desde ahora me voy a llamar DevProbeAI."}]
      },
    ],
  });


  constructor() { }

  ngOnInit() {
  }

  async askQuestionNow() {
    const msg = this.question!;
    const result = await this.chat.sendMessage(msg);
    this.answer = result.response.text();
  }
}
