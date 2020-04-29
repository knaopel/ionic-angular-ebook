import { Injectable } from '@angular/core';

export interface Chapter {
  id: number;
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public chapters: Chapter[] = [
    {
      id: 1,
      title: 'Chapter One',
      text: 'here is the text of chapter one'
    },
    {
      id: 2,
      title: 'Chapter Two',
      text: 'here is the text of chapter two'
    }
  ];
  constructor() { }

  public getChapters(): Chapter[] {
    return this.chapters;
  }

  public getChapterById(id: number): Chapter {
    return this.chapters[id - 1];
  }
}
