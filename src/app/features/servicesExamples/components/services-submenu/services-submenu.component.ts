import { Component, OnInit } from '@angular/core';
import { SubmenuServicesService } from '../../services/submenu-services.service';

@Component({
  selector: 'servicesSubmenu',
  templateUrl: './services-submenu.component.html',
  styleUrls: ['./services-submenu.component.css'],
})
export class ServicesSubmenuComponent implements OnInit {
  servicesSubmenuLinks = [];
  constructor(private submenuServicesService: SubmenuServicesService) {}

  ngOnInit(): void {
    this.servicesSubmenuLinks =
      this.submenuServicesService.createServicesExampleLinks();
    console.log(this.servicesSubmenuLinks);
  }
}
