import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { TAB_TYPE } from './navigator.service';
import { FILE_TYPE } from '../utils/FILE_TYPE';

const { apiUrl } = environment;

export interface ITableRow {
  id: number;
  favorite: boolean;
  trash: boolean;
  name: string;
  updateTime: Date;
  type: FILE_TYPE;
  owner: string;
  size: number;
  content: string | number[] | ITableRow[];
}

export const initTableRow = () => ({
  id: -1,
  favorite: false,
  trash: false,
  name: '',
  updateTime: new Date(),
  type: FILE_TYPE.FOLDER,
  owner: '',
  size: 0,
  content: ''
});

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private http: HttpClient) {
  }

  private files: ITableRow[] = [];
  private file: ITableRow | null = null;
  private complete: string[] = [];
  private content: ITableRow = initTableRow();
  private isOpen = false;

  subFiles$ = new BehaviorSubject<ITableRow[]>(this.files);
  subFile$ = new BehaviorSubject<ITableRow | null>(this.file);
  subComplete$ = new BehaviorSubject<string[]>(this.complete);
  subContent$ = new BehaviorSubject<ITableRow>(this.content);
  subIsPopupOpen$ = new BehaviorSubject<boolean>(this.isOpen);

  fetchMain(type: TAB_TYPE): void {
    this.http.get<ITableRow[]>(`${apiUrl}/files/main/${type}`)
      .subscribe(value => this.subFiles$.next(value));
  }

  fetchFile(id: number): void {
    this.http.get<ITableRow>(`${apiUrl}/files/file/${id}`)
      .subscribe(value => this.subFile$.next(value));
  }

  fetchFolder(id: number): void {
    this.http.get<ITableRow>(`${apiUrl}/files/file/${id}`)
      .subscribe(value => this.subFiles$.next(value.content as ITableRow[]));
  }

  fetchContent(id: number): void {
    this.http.get<ITableRow>(`${apiUrl}/files/file/${id}`)
      .subscribe(value => this.subContent$.next(value));
  }

  postFavorite(body: object): void {
    this.http.post(`${apiUrl}/files/favorite`, body).subscribe();
  }

  postComplete(body: object): void {
    this.http.post<string[]>(`${apiUrl}/search/complete`, body)
      .subscribe(value => this.subComplete$.next(value));
  }

  postSearch(body: object): void {
    this.http.post<ITableRow[]>(`${apiUrl}/search`, body)
      .subscribe(value => this.subFiles$.next(value));
  }

  setIsOpen(isOpen: boolean): void {
    this.subIsPopupOpen$.next(isOpen);
  }
}

