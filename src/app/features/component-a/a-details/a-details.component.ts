import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-a-details",
    templateUrl: "./a-details.component.html",
    styleUrls: ["./a-details.component.css"],
})
export class ADetailsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        // 1.URL uitlezen en ID van component ophalen
        // 2. Data ophalen die bij deze ID hoort, en tonen in HTML
    }
}
