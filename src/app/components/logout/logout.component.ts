import { AccountService } from './../../account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass'],
})
export class LogoutComponent {
  constructor(private account: AccountService) {}

  handleLogout(): void {
    this.account.logout();
  }
}
