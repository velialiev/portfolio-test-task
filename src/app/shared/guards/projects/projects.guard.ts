import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {ConfirmationPopupComponent} from '../../../parts/confirmation-popup/confirmation-popup.component';
import {MatDialog} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProjectsGuard implements CanActivate {

  constructor(private dialog: MatDialog) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '250px',
      data: {action: 'open projects page'}
    });

    return dialogRef.afterClosed();
  }

}
