import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "angular-demo";
    pi = 3.14;

    getTitle() {
        return this.title;
    }
}
