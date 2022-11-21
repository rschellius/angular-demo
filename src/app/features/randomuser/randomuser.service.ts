import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RandomUser } from "./randomuser.model";
import { environment } from "../../../environments/environment";
import { map, Observable, tap } from "rxjs";
import { ApiResponse } from "src/app/core/api-response/api-response.model";

@Injectable({
    providedIn: "root",
})
export class RandomuserService {
    BASE_URL = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getRandomUsers(): Observable<RandomUser[]> {
        const randomUserUrl = this.BASE_URL + "?results=10";
        console.log("get " + randomUserUrl);
        return this.http.get<ApiResponse<RandomUser[]>>(randomUserUrl).pipe(
            map((response: ApiResponse<RandomUser[]>) => response.results),
            tap((randomusers: RandomUser[]) => {
                //
                //
                console.log(randomusers);
                return randomusers;
            })
        );
    }
}
