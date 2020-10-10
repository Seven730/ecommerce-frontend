import { UserInfo } from './userInfo';
import { ProfileService } from './profile.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  public userInfo: any;

  constructor(public service: ProfileService) {}

  ngOnInit() {
    this.service.getUserInfo().subscribe(
      (response) => {
        this.userInfo = response;
        console.log(this.userInfo);
      },
      (error) => console.log(error)
    );
  }

  isAdmin(): boolean {
    return this.userInfo.groups === 'admin';
  }
}
