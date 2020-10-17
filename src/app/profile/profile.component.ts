import { ProfileService } from './profile.service';
import { Component, OnInit } from '@angular/core';

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
      },
      (error) => console.log(error)
    );
  }

  isAdmin(): boolean {
    return this.userInfo.groups === 'admin';
  }
}
