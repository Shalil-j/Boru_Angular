import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({

  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Title = 'angulartitle';

  constructor() { }

  ngOnInit(): void {
    // const appTitle = this.titleService.getTitle();
  }

}
