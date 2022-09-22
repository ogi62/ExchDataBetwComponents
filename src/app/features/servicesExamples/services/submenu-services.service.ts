import { Injectable } from '@angular/core';
import { servicesExampleSubMenuLinks } from 'src/app/shared/models/subMenuLinks.model';
import { servicesExampleSubMenuTitles } from 'src/app/shared/models/subMenuTitles.model';

Injectable({
  providedIn: 'root',
});
export class SubmenuServicesService {
  public exampleServicesSubmenuLinks = [];

  createServicesExampleLinks() {
    this.exampleServicesSubmenuLinks = [
      {
        link: servicesExampleSubMenuLinks.SERVICES_EXAMPLE_ONE,
        title: servicesExampleSubMenuTitles.SERVICES_EXAMPLE_ONE,
      },
      {
        link: servicesExampleSubMenuLinks.SERVICES_EXAMPLE_TWO,
        title: servicesExampleSubMenuTitles.SERVICES_EXAMPLE_TWO,
      },
      {
        link: servicesExampleSubMenuLinks.SERVICES_EXAMPLE_THREE,
        title: servicesExampleSubMenuTitles.SERVICES_EXAMPLE_THREE,
      },
      {
        link: servicesExampleSubMenuLinks.SERVICES_EXAMPLE_FOUR,
        title: servicesExampleSubMenuTitles.SERVICES_EXAMPLE_FOUR,
      },
      {
        link: servicesExampleSubMenuLinks.SERVICES_EXAMPLE_FIVE,
        title: servicesExampleSubMenuTitles.SERVICES_EXAMPLE_FIVE,
      },
    ];

    return this.exampleServicesSubmenuLinks;
  }
}
