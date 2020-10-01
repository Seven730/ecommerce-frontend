import { Component, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent {
  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  openWithTemplate(tpl: TemplateRef<any>) {
    const configs = new OverlayConfig({
      width: 1000,
      height: 500,
      direction: 'ltr',
      hasBackdrop: true,
      panelClass: ['modal', 'is-active'],
      backdropClass: 'modal-background',
    });

    const overlayRef = this.overlay.create(configs);

    overlayRef.attach(new TemplatePortal(tpl, this.viewContainerRef));
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }
}
