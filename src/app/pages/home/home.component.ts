import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sidebarOpen: boolean;

  constructor() { }

  triggerSidebar(value: string): void {
    (value === 'open') ? (this.sidebarOpen = true) : (this.sidebarOpen = false);
  }

  ngOnInit(): void {
    this.sidebarOpen = false;
  }
}
