import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../component-a.model";
import { ComponentAService } from "../component-a.service";

@Component({
    selector: "app-a-details",
    templateUrl: "./a-details.component.html",
    styleUrls: ["./a-details.component.css"],
})
export class ADetailsComponent implements OnInit {
    componentId: string | null | undefined;
    user: User | undefined;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: ComponentAService
    ) {}

    ngOnInit(): void {
        /**
         * We gebruiken de EditComponent om een bestaande record te wijzigen
         * én om een nieuwe record te maken.
         * Een bestaande record heeft een :id in de URL, bv '/users/1/edit'
         * Als die er dus is gaan we de user ophalen en bewerken.
         * Als er geen :id in de URL zit (via '/users/new') maken we een nieuwe record.
         */
        this.route.paramMap.subscribe((params) => {
            this.componentId = params.get("id");
            if (this.componentId) {
                // Bestaande user
                console.log("Bestaande component");
                this.user = this.userService.getUserById(this.componentId);
            } else {
                // Nieuwe user
                console.log("Nieuwe component");
            }
        });
    }
}
