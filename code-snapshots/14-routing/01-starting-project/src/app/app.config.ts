import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router'
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      // with component input binding allows grabbing of query params
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      }))
  ]
}
