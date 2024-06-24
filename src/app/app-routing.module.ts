import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module')
            .then(m => m.HomeModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module')
            .then(m => m.AuthModule)
    },
    /* {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module')
            .then(m => m.ProfileModule),
        canActivate: [AuthGuard],
    }, */

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '**',
        component: NotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

