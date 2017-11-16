export enum MenuType {
  BRAND,
  NAVITEM,
  LEFT,
  RIGHT
}

export interface RouteInfo {
  path: string;
  title: string;
  menuType: MenuType;
}
