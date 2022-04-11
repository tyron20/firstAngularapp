import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newQuote = new Quote('', '', '');

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }

  constructor() {}

  ngOnInit(): void {}
}
