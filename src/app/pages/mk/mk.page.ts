import { Component, OnInit } from '@angular/core';
import {MarkdownComponent, MarkdownPipe} from "ngx-markdown";

@Component({
  selector: 'app-mk',
  templateUrl: './mk.page.html',
  styleUrls: ['./mk.page.scss'],


})
export class MkPage implements OnInit {
  ngxMarkdownVersion = '18.0.0';

  markdown:string = `
  # Markdown Example
  ### This is an example of markdown in ngx-markdown
  `;



  constructor() {

    //wait for the page to load
    window.onload = function() {
      //get all h1 elements and @add text shadow
      let h1s = document.getElementsByTagName('h1');
      for (let i = 0; i < h1s.length; i++) {
        h1s[i].style.fontSize = '2em';
      }
    }


  }

  ngOnInit() {
  }


  addCSS() {


  }
}
