import { AccountService } from './../account.service';
import { Component, ViewContainerRef, TemplateRef } from '@angular/core';
import {
  Overlay,
  OverlayConfig,
  ConnectionPositionPair,
} from '@angular/cdk/overlay';
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
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const configs = new OverlayConfig({
      hasBackdrop: true,
      panelClass: ['modal', 'is-active'],
      backdropClass: 'overlay-background',
      positionStrategy,
    });

    const overlayRef = this.overlay.create(configs);

    let originPos = {
      originX: 'center',
      originY: 'center',
    };

    overlayRef.attach(new TemplatePortal(tpl, this.viewContainerRef));
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }

  onSubmit() {
    this.account.login(this.username, this.password).subscribe((data) => console.log(data));
  }

  onCancel() {
    this.overlay;
  }
}
