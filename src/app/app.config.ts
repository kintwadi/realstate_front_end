import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {
    HTTP_INTERCEPTORS,
    HttpClient,
    provideHttpClient,
    withInterceptors,
    withInterceptorsFromDi
} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {withNgxsStoragePlugin} from '@ngxs/storage-plugin';
import {provideStore} from '@ngxs/store';
import {provideAngularSvgIcon} from 'angular-svg-icon';
import {provideToastr} from 'ngx-toastr';
import {routes} from './app.routes';
import {categoryState} from './shared/store/states/category.state';
import {compareState} from './shared/store/states/compare.state';
import {propertyState} from './shared/store/states/property-detail.state';
import {imageState} from './shared/store/states/property-images.state';
import {wishlistState} from './shared/store/states/wishlist.state';
import {AuthInterceptor} from "./shared/interceptors/auth.interceptor";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes),
        provideHttpClient(),
        provideAnimations(),
        provideAngularSvgIcon(),
        provideToastr(),
        provideStore([wishlistState, categoryState, compareState, imageState, propertyState], withNgxsStoragePlugin({
                keys: ['wishlist', 'compare']
            })
        ),
        importProvidersFrom(
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }),
        ),
        provideHttpClient(withInterceptorsFromDi()),

        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
    ]
};
