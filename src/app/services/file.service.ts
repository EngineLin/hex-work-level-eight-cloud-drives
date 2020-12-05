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

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private http: HttpClient) {
  }

  private files: ITableRow[] = [];
  private file: ITableRow | null = null;

  subFiles$ = new BehaviorSubject<ITableRow[]>(this.files);
  subFile$ = new BehaviorSubject<ITableRow | null>(this.file);

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

  postFavorite(body: object): void {
    this.http.post(`${apiUrl}/files/favorite`, body).subscribe();
  }
}
