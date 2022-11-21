import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AColumnsComponent } from "./features/component-a/a-columns.component";
import { ADetailsComponent } from "./features/component-a/a-details/a-details.component";
import { AEditComponent } from "./features/component-a/a-edit/a-edit.component";
import { AListComponent } from "./features/component-a/a-list/a-list.component";
import { BListComponent } from "./features/component-b/b-list/b-list.component";
import { RandomuserListComponent } from "./features/randomuser/randomuser-list/randomuser-list.component";

const routes: Routes = [
    { path: "", redirectTo: "component-a", pathMatch: "full" },
    { path: "component-a", pathMatch: "full", component: AListComponent },
    { path: "component-a/new", pathMatch: "full", component: AEditComponent },
    {
        path: "component-a/:id",
        pathMatch: "full",
        component: ADetailsComponent,
    },
    {
        path: "component-a/:id/edit",
        pathMatch: "full",
        component: AEditComponent,
    },
    { path: "component-b", component: BListComponent },
    {
        path: "a-columns",
        component: AColumnsComponent,
        children: [{ path: "a-details", component: ADetailsComponent }],
    },
    {
        path: "randomuser",
        pathMatch: "full",
        component: RandomuserListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
