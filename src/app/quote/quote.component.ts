import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
// import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quote: Quote[] = [
    
      new Quote('Power is not alluring to pure minds.', 'tyron', 'Thomas Jefferson '),
      new Quote('All we have to decide is what to do with the time that is given us.', 'tyron','Charles Dickens '),
      new Quote('Whatever our souls are made of, his and mine are the same.','tyron','W.B. Yeats',),
      new Quote( 'Not all those who wander are lost.', 'tyron','A.A. Milne',),

  ];
addNewQuote(quote:any){
  let qLength = this.quote.length;
  // quote.id= qLength+1;
  // quote.creationDate=new Date(quote.creationDate)
  this.quote.push(quote)
}
  votescount: number = 0;

  functionlike() {
    this.votescount++;
  }

  functiondislike() {
    this.votescount--;
  }

  functiondelete(i: any) {
    this.quote.pop();
  }
  constructor() {}

  ngOnInit(): void {}
}
