import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RefreshService {
  constructor(private router: Router) {}
  refresh() {
    this.router
      .navigateByUrl('/RefreshService', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['home']);
      });
  }
}
