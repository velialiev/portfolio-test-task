import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IConfirmationPopupData) { }

  public cancel(): void {
    this.dialogRef.close(false);
  }
  public confirm(): void {
    this.dialogRef.close(true);
  }
}

interface IConfirmationPopupData {
  action: string;
}
