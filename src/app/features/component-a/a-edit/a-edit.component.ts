import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-a-edit",
    templateUrl: "./a-edit.component.html",
    styleUrls: ["./a-edit.component.css"],
})
export class AEditComponent implements OnInit {
    componentId: string | null | undefined;
    componentExists: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router) {}

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
                this.componentExists = true;
            } else {
                // Nieuwe user
                console.log("Nieuwe component");
                this.componentExists = false;
            }
        });
    }
}
