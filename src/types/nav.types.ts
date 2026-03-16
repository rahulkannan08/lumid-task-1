export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavDropdown {
  label: string;
  items: NavDropdownItem[];
}

export type NavItem = NavLink | NavDropdown;

export function isNavDropdown(item: NavItem): item is NavDropdown {
  return 'items' in item;
}
