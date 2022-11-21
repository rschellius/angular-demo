import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { RandomUser } from "../randomuser.model";
import { RandomuserService } from "../randomuser.service";

@Component({
    selector: "app-randomuser-list",
    templateUrl: "./randomuser-list.component.html",
    styleUrls: ["./randomuser-list.component.css"],
})
export class RandomuserListComponent implements OnInit, OnDestroy {
    // Benadering 1: lokale opslag van users
    randomUsers: RandomUser[] | undefined;
    // als je subscribe gebruikt, dan ook unsubscriben in ngOnDestroy()
    subscription: Subscription | undefined;

    // Benadering 2 : Observable gebruiken in html via async
    // Voordeel: geen unsubscribe nodig, omdat async dat afhandelt
    randomUsers$: Observable<RandomUser[]> | undefined;

    constructor(private randomUserService: RandomuserService) {}

    ngOnInit(): void {
        // Benadering 1
        // console.log("subscribing");
        // this.subscription = this.randomUserService
        //     .getRandomUsers()
        //     .subscribe((response) => {
        //         this.randomUsers = response;
        //         console.log(this.randomUsers);
        //     });

        // Benadering 2
        this.randomUsers$ = this.randomUserService.getRandomUsers();
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            console.log("unsubscribing");
            this.subscription.unsubscribe();
        }
    }
}
