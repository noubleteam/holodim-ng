import { Injectable } from '@angular/core';
import { routes } from '../app.routes';

@Injectable({
  providedIn: 'root',
})
export class RoutsConfig {
  getRoutsAndLabels() {
    return [
      { link: routes[0].path ?? '', label: 'Главная' },
      { link: routes[1].path ?? '', label: 'Услуги' },
      { link: routes[2].path ?? '', label: 'Каталог' },
      { link: routes[3].path ?? '', label: 'Контакты' },
    ];
  }
}
