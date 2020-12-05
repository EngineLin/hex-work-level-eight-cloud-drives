import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
const { apiUrl } = environment;

export type Drive = {
  used: number,
  total: number
};

export interface IUserInfo {
  name: string;
  avatarUrl: string;
  drive: Drive;
}

const initUserInfo = (): IUserInfo => ({
  name: '',
  avatarUrl: '',
  drive: {
    used: 0,
    total: 0
  }
});

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  private userInfo: IUserInfo = initUserInfo();

  subUserInfo$ = new BehaviorSubject<IUserInfo>(this.userInfo);

  fetchUserInfo(): void {
    this.http.get<IUserInfo>(apiUrl + '/user')
     .subscribe(value => this.subUserInfo$.next(value));
  }
}
