import { Component, OnInit } from '@angular/core';
import mixitup from 'mixitup';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  mixitupInstance: any;

  constructor() { }

  ngOnInit(): void { }

  initializeMixitup(): void {
    this.mixitupInstance = mixitup('.mixitup-container');
  }
}
