import { Injectable } from "@angular/core";
import { navLinks } from "../../models/navLinks.model";
import { navTitles } from "../../models/navTitles.model";

@Injectable({
    providedIn: 'root'
})
export class NavbarService {
    public navLinks = [];

    createNavLinks() {
        this.navLinks = [
            {
                link: navLinks.INPUT_OUTPUT_EXAMPLE,
                title: navTitles.INPUT_OUTPUT_EXAMPLE
            },
            {
                link: navLinks.EXAMPLE_4,
                title: navTitles.EXAMPLE_FOUR
            },
            {
                link: navLinks.EXAMPLE_VIEW_CHILD,
                title: navTitles.EXAMPLE_VIEW_CHILD
            },
            {
                link: navLinks.SERVICES_EXAMPLE,
                title: navTitles.SERVICES_EXAMPLE
            }
        ]

        return this.navLinks
    }
}