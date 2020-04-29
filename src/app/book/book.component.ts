import { Component, OnInit } from '@angular/core';
import { BookService, Chapter } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {

  constructor(private book: BookService) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getChapters(): Chapter[] {
    return this.book.getChapters();
  }

}
