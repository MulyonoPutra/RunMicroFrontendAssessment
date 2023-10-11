export interface Sidebar {
  routeLink: string;
  icon?: string;
  label: string;
  expanded?: boolean;
  items?: Sidebar[];
  role?: string;
}

export interface SidebarToggle {
  screenWidth: number;
  collapsed: boolean;
}
