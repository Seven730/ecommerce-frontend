import { AccountService } from './../../account.service';
import { Component, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

interface IRegisterComponent {
  username: string;
  password: string;
  repeatPassword: string;
  email: string;
  overlayRef: any;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements IRegisterComponent {
  username;
  password;
  repeatPassword;
  email;
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
    if (this.email && this.username && this.password && this.repeatPassword) {
      if (this.password === this.repeatPassword) {
        this.account
          .register(this.email, this.username, this.password)
          .subscribe(
            (response) => {
              localStorage.setItem('token', response.token);
              this.overlayRef.dispose();
            },
            (error) => {
              console.log(error);
            }
          );
      } else {
        alert('Hasła muszą być identyczne!');
      }
    } else {
      alert('Podaj poprawne dane!');
    }
  }

  onCancel(): void {
    this.overlayRef.dispose();
  }
}
