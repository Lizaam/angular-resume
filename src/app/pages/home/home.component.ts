import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sidebarOpen: boolean;

  constructor() { }

  triggerSidebarOpen(value: any): void {
    this.sidebarOpen = true;
  }

  triggerSidebarClose(value: any): void {
    this.sidebarOpen = false;
  }

  ngOnInit(): void {
    this.sidebarOpen = false;
  }

}
