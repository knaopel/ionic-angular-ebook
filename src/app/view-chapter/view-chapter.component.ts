import { Component, OnInit } from '@angular/core';
import { Chapter, BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-chapter',
  templateUrl: './view-chapter.component.html',
  styleUrls: ['./view-chapter.component.scss'],
})
export class ViewChapterComponent implements OnInit {
  public chapter: Chapter;

  constructor(
    private book: BookService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.chapter = this.book.getChapterById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'TOC' : '';
  }

  shouldNavigateBack() {
    return this.chapter.id > 1;
  }

  shouldNavigateFwd() {
    return this.chapter.id < this.book.getChapters().length;
  }

}
