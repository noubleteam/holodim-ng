import { Injectable } from '@angular/core';
import { routes } from '../app.routes';

@Injectable({
  providedIn: 'root',
})
export class RoutsConfig {
  getRoutsAndLabels() {
    const routesData = routes.map((route) => {
      return {
        link: route.path,
        label: route.data?.['breadcrumb'] ?? '',
      };
    });
    return routesData;
  }
}
