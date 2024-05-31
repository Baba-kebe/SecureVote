import { Injectable } from '@angular/core';
import {MypopupComponent} from "../mypopup/mypopup.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  openPopup(x: number, y : number){
    this.dialog.open(MypopupComponent,{
      position: { top: `${y}px`, left: `${x}px` },
      width: '30%'
    })
  }
  constructor(private dialog : MatDialog) { }
}
