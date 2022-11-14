import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AListComponent } from "./features/component-a/a-list/a-list.component";
import { BListComponent } from "./features/component-b/b-list/b-list.component";
import { AColumnsComponent } from "./features/component-a/a-columns.component";
import { ADetailsComponent } from './features/component-a/a-details/a-details.component';
import { AEditComponent } from './features/component-a/a-edit/a-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        AListComponent,
        BListComponent,
        AColumnsComponent,
        ADetailsComponent,
        AEditComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, NgbModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
