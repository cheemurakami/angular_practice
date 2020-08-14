import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav', // put this in app.comp.html
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  appTitle: string = "Kiwi's app";
  constructor() { }

  ngOnInit(): void {
  }

}
