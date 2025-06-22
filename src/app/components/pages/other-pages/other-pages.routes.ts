import { Routes } from '@angular/router';
import { AboutUs1Component } from './about-us1/about-us1.component';
import { AboutUs2Component } from './about-us2/about-us2.component';
import { ComingSoon1Component } from './coming-soon1/coming-soon1.component';
import { ComingSoon2Component } from './coming-soon2/coming-soon2.component';
import { ComingSoon3Component } from './coming-soon3/coming-soon3.component';
import { ErrorPage404Component } from './error-page404/error-page404.component';
import { FaqComponent } from './faq/faq.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogInComponent } from './log-in/log-in.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ServicesComponent } from './services/services.component';
import { SignUpWizardComponent } from './sign-up-wizard/sign-up-wizard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import {authGuard} from "../../../shared/guards/auth.guard";
import {loginGuard} from "../../../shared/guards/login.guard";

export default[
  {
    path: 'about-us-1',
    component: AboutUs1Component,
  },
  {
    path: 'about-us-2',
    component: AboutUs2Component,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: 'coming-soon-1',
    component: ComingSoon1Component,
  },
  {
    path: 'coming-soon-2',
    component: ComingSoon2Component,
  },
  {
    path: 'coming-soon-3',
    component: ComingSoon3Component,
  },
  {
    path: '404',
    component: ErrorPage404Component,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'log-in',
    component: LogInComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'sign-up-wizard',
    component: SignUpWizardComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'terms-conditions',
    component: TermsConditionComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
] as Routes;

