import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Output() openSidebarEvent = new EventEmitter<string>();

  constructor() { }

  openSidebar(value: string): void {
    this.openSidebarEvent.emit(value);
  }

  ngOnInit(): void {}
}
