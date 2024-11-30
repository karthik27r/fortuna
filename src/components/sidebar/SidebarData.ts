import { SidebarItem } from '@/types/sidebar';
import { ROUTES } from '@/constants/routes';

export const SidebarData: SidebarItem[] = [
    { title: 'Dashboard', path: ROUTES.DASHBOARD },
    { title: 'Finance', path: ROUTES.FINANCE },
    { title: 'Profile', path: ROUTES.PROFILE },
];