import { Routes } from '@angular/router';
import { MainPage } from './components/main-page/main-page';

export const routes: Routes = [
  {
    path: '',
    title:
      'Монтаж, ремонт и сервисное обслуживание промышленного холодильного оборудования | ИП Витковский',
    component: MainPage,
  },
  {
    path: 'service',
    title: 'Услуги | ИП Витковский',
    component: MainPage,
  },
  {
    path: 'catalog',
    title: 'Каталог | ИП Витковский',
    component: MainPage,
  },
  {
    path: 'contacts',
    title: 'Контакты | ИП Витковский',
    component: MainPage,
  },
];
