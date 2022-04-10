import { Component, OnInit } from '@angular/core';
import { QuoteMessage } from 'src/app/quote-message';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quotes: QuoteMessage [] = [];

  quoteMessage! : string;
  qouteAuthor! : string;
  quoteUser!: string;
  newQuote: any;
  likes: number = 0;
  dislikes: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
