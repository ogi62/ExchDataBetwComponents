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
                link: subMenuLinks.PARENT_FIRST_EXAMPLE,
                title: subMenuTitles.PARENT_FIRST_EXAMPLE
            },
            {
                link: subMenuLinks.COUNT_LINK,
                title: subMenuTitles.COUNT_TITLE
            },
            {
                link: subMenuLinks.CUSTOMERS,
                title: subMenuTitles.CUSTOMERS_TITLE
            },
            {
                link: subMenuLinks.ARTICLE,
                title: subMenuTitles.ARTICLE
            }
        ]

        return this.subMenuLinks
    }
}