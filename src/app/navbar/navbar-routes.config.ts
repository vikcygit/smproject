import { MenuType, RouteInfo } from './navbar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'BrandName', menuType: MenuType.BRAND },
  { path: '', title: 'BrandName appname', menuType: MenuType.BRAND },
  { path: 'heroes', title: 'Notification', menuType: MenuType.LEFT },
  { path: 'about', title: 'Search', menuType: MenuType.RIGHT },
  { path: 'contact', title: 'Contact', menuType: MenuType.RIGHT }
];
