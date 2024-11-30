import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarItem } from '@/types/sidebar';
import { ROUTES } from '@/constants/routes';

interface SidebarElementProps {
    isOpen: boolean;
}

const SidebarElement: React.FC<SidebarElementProps> = ({ isOpen }) => {
    const navigationItems: SidebarItem[] = [
        { title: 'Dashboard', path: ROUTES.DASHBOARD },
        { title: 'Finance', path: ROUTES.FINANCE },
        { title: 'Profile', path: ROUTES.PROFILE },
    ];

    return (
        <nav className="flex-grow">
            <ul>
                {navigationItems.map((item, index) => (
                    <li key={index} className="mb-4">
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => `
                                flex items-center p-2 transition-colors duration-200 pl-11
                                ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}
                                ${isOpen ? 'justify-start' : 'justify-start'}
                            `}
                        >
                            <span className="inline-block w-6 h-6 bg-white rounded-full"></span>
                            {isOpen && <span className="ml-4">{item.title}</span>}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SidebarElement;