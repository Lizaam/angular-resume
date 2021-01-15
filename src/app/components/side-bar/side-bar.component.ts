import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() sidebarOpen: boolean;
  @Output() closeSidebarEvent = new EventEmitter<string>();

  constructor() { }

  closeSidebar(value: string): void {
    this.closeSidebarEvent.emit(value);
    this.sidebarOpen = false;
  }

  ngOnInit(): void { }
}
