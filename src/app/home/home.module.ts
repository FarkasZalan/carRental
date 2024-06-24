import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { HomeComponent } from "./home/home.component";
import { HomeRoutingModule } from "./home-routing.module";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        MatCardModule,
        FormsModule,
        MatSelectModule,
        MatInputModule,
    ]
})
export class HomeModule {
}
