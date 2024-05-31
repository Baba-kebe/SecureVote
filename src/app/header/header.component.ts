import { Component } from '@angular/core';
import {PopupService} from "../service/popup.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private popupService : PopupService) {
  }
  info(event : MouseEvent) {
    let x= event.clientX
    let y = event.clientY
    this.popupService.openPopup(x,y)
  }
}
