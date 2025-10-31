import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'service',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'catalog',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contacts',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
