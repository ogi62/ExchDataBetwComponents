import { Component, Input, OnInit } from '@angular/core';
import { navLinks } from '../../models/navLinks.model';
import { NavbarService } from './navbar.service';

export interface Link {
  path: string;
  Title: string;
}

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   Links = [];


  constructor( 
    private navbarService: NavbarService
  ) { 
  }

  ngOnInit(): void {
    this.Links = this.navbarService.createNavLinks();
  }

}
