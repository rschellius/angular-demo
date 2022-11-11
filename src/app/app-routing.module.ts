import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AColumnsComponent } from "./features/component-a/a-columns.component";
import { ADetailsComponent } from "./features/component-a/a-details/a-details.component";
import { AListComponent } from "./features/component-a/a-list/a-list.component";
import { BListComponent } from "./features/component-b/b-list/b-list.component";

const routes: Routes = [
    { path: "", redirectTo: "component-a", pathMatch: "full" },
    { path: "component-a", component: AListComponent },
    { path: "component-b", component: BListComponent },
    {
        path: "a-columns",
        component: AColumnsComponent,
        children: [{ path: "a-details", component: ADetailsComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
