import { Component, Input, OnInit } from '@angular/core';
import { SubmenuService } from './service/submenu.service';

export interface Link {
  path: string;
  Title: string;
}

@Component({
  selector: 'submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  subMenuLinks = [];


  constructor(private subMenuService: SubmenuService) { 
  }

  ngOnInit(): void {
    this.subMenuLinks = this.subMenuService.createSubMenuLinks();
  }

}
