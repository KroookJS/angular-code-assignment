import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { dataServiceFactory } from './data-access/dataServiceCombine.module';
import { ApiMockService } from './data-access/api-mock.service';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: 'DataServiceCombined',
      useFactory: dataServiceFactory,
      deps: [ApiMockService],
    },
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
  ],
};
