import { Component, OnInit } from "@angular/core";
import { stringify } from "querystring";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
    constructor() {}

    footerTitle(text: string): string {
        return text;
    }

    ngOnInit(): void {}
}
