import { AccountService } from './../account.service';
import { Component, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

interface ILoginComponent {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements ILoginComponent {
  username;
  password;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private account: AccountService
  ) {}

  openWithTemplate(tpl: TemplateRef<any>) {
    const configs = new OverlayConfig({
      // width: 100,
      // height: 100,
      hasBackdrop: true,
      panelClass: ['modal', 'is-active'],
      backdropClass: 'modal-background',
    });

    const overlayRef = this.overlay.create(configs);

    overlayRef.attach(new TemplatePortal(tpl, this.viewContainerRef));
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }

  onSubmit() {
    this.account.login(this.username, this.password);
  }

  onCancel() {}
}
