import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { environment } from "../environments/environment";
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthComponent } from "./auth/auth/auth.component";

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        FooterComponent,
        HeaderComponent,
        AuthComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        MatDialogModule,
        AngularFirestoreModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
    ],
    providers: [
        provideAnimationsAsync(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }