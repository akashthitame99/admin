
export interface ISidebarMenu {
    label: string;
    path?: string;
    icon: JSX.Element;
    subMenu?: ISidebarSubMenu[];
}

export interface ISidebarSubMenu {
    label: string;
    path: string;
}
