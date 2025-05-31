import {Routes} from '@angular/router';
import {AuthenticationComponent} from "./_components/authentication/authentication.component";
import {SignInComponent} from "./_components/authentication/sign-in/sign-in.component";
import {SignUpComponent} from "./_components/authentication/sign-up/sign-up.component";
import {LandingPageComponent} from "./_components/features/landing-page/landing-page.component";

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            {path: '', component: SignInComponent},
            {path: 'sign-up', component: SignUpComponent},
        ]
    },

    {
        path: 'home',
        component: LandingPageComponent,
    },

];
