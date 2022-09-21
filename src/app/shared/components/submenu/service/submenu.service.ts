import { Injectable } from "@angular/core";
import { subMenuLinks } from "src/app/shared/models/subMenuLinks.model";
import { subMenuTitles } from "src/app/shared/models/subMenuTitles.model";

Injectable({
    providedIn: 'root'
})
export class SubmenuService {
    public subMenuLinks = [];

    createSubMenuLinks() {
        this.subMenuLinks = [
            {
                link: subMenuLinks.COUNT_LINK,
                title: subMenuTitles.COUNT_TITLE
            },
            {
                link: subMenuLinks.CUSTOMERS,
                title: subMenuTitles.CUSTOMERS_TITLE
            }
        ]

        return this.subMenuLinks
    }
}