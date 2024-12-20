import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {environment} from "../environments/environment.prod";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {HttpClientModule} from "@angular/common/http";
import {NgxEchartsDirective, NgxEchartsModule, provideEcharts} from "ngx-echarts";
import {getVertexAI, provideVertexAI} from "@angular/fire/vertexai-preview";
import {NgxFlamegraphModule} from "ngx-flamegraph";
import {MarkdownModule} from "ngx-markdown";
import {getStorage, provideStorage} from "@angular/fire/storage";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsDirective,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NgxFlamegraphModule,
    MarkdownModule.forRoot(),

  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideVertexAI(() => getVertexAI()),
    provideStorage(()=>getStorage()),
    HttpClientModule,
    provideEcharts(),

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
