import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirme',
  templateUrl: './confirme.component.html'
})
export class ConfirmeComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroe
    ) { }

  ngOnInit(): void {
    
  }

  delete() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }
}
