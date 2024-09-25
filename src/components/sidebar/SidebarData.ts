interface SidebarItem {
    title: string;
    path: string;
    icon?: string;
    className?: string;
}

export const SidebarData: SidebarItem[] = [
    { title: 'Home', path: '#' },
    { title: 'About', path: '#' },
    { title: 'Services', path: '#' },
    { title: 'Contact', path: '#' },
];