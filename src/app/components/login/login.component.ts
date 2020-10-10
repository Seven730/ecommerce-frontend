import { AccountService } from '../../account.service';
import { Component, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

interface ILoginComponent {
  username: string;
  password: string;
  overlayRef: any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements ILoginComponent {
  username;
  password;
  overlayRef;

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
      backdropClass: 'dark-backdrop',
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    const overlayRef = this.overlay.create(configs);
    this.overlayRef = overlayRef;

    overlayRef.attach(new TemplatePortal(tpl, this.viewContainerRef));
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }

  onSubmit(): void {
    if (this.username && this.password) {
      this.account.login(this.username, this.password).subscribe(
        (response) => {
          console.log(response);
          localStorage.setItem('token', response.token);
          this.overlayRef.dispose();
          window.location.reload();
        },
        (error) => console.log(error)
      );
    } else {
      alert('Podaj poprawne dane!');
    }
  }

  onCancel(): void {
    this.overlayRef.dispose();
  }
}
