import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'servicesSubmenu',
  templateUrl: './services-submenu.component.html',
  styleUrls: ['./services-submenu.component.css']
})
export class ServicesSubmenuComponent implements OnInit {

  servicesSubmenuLinks = [];
  constructor() { }

  ngOnInit(): void {
  }

}
