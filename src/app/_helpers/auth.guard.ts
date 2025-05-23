import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../_services/auth.service";
import {map} from "rxjs/operators";
import {catchError, Observable, of} from "rxjs";
import {inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

export const AuthGuard: CanActivateFn = (route, state) => {
    const http = inject(HttpClient);
    const router = inject(Router);

    return true;
};
