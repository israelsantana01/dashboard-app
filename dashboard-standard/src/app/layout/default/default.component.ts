import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  templateUrl: '../default/default.component.html',
  styleUrls: ['../default/default.component.scss']
})

export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  mode = 'side';

  constructor() {

  }

  ngOnInit() {

  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= 768) {
      this.mode = 'over';
      this.sideBarOpen = false;
    } else {
      this.mode = 'side';
    }
  }

}
