import { Component, OnInit } from "@angular/core";
import { User } from "../component-a.model";
import { ComponentAService } from "../component-a.service";

@Component({
    selector: "app-a-list",
    templateUrl: "./a-list.component.html",
    styleUrls: ["./a-list.component.css"],
})
export class AListComponent implements OnInit {
    users: User[] | undefined;

    constructor(private aService: ComponentAService) {}

    ngOnInit(): void {
        // haal de users/entities via de service op
        this.users = this.aService.getAllUsers();
        console.log(this.users.length + " users found.");
    }
}
