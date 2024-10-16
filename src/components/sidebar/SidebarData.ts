interface SidebarItem {
    title: string;
    path: string;
    icon?: string;
    className?: string;
}

export const SidebarData: SidebarItem[] = [
    { title: 'Dashboard', path: '/dashboard' },
    { title: 'Finance', path: '/finance' },
    { title: 'Profile', path: '/profile' },
];