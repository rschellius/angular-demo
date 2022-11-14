import { Injectable } from "@angular/core";
import { Gender, User } from "./component-a.model";

@Injectable({
    providedIn: "root",
})
export class ComponentAService {
    users: User[] = [
        {
            id: "12345-123-12",
            firstName: "Robin",
            lastName: "Schellius",
            emailAddress: "r.schellius@avans.nl",
            birthDate: new Date(),
            gender: Gender.male,
        },
        {
            id: "12345-123-23",
            firstName: "Kees",
            lastName: "Jansen",
            emailAddress: "k.jansen@avans.nl",
            birthDate: new Date(),
            gender: Gender.unknown,
        },
        {
            id: "12345-123-56",
            firstName: "Marieke",
            lastName: "van Dam",
            emailAddress: "m.vandam@avans.nl",
            birthDate: new Date(),
            gender: Gender.female,
        },
    ];

    constructor() {
        console.log("ComponentAService created");
    }

    getAllUsers(): User[] {
        return this.users;
    }

    getUserById(id: string): User {
        return this.users.filter((user: User) => user.id === id)[0];
    }
}
