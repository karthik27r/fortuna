import React from 'react';
import { SidebarData as menuItems } from '@/components/sidebar/SidebarData';

interface SidebarElementProps {
    isOpen: boolean;
}

const SidebarElement: React.FC<SidebarElementProps> = ({ isOpen }) => {
    return (
        <nav className="flex-grow">
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className="mb-4">
                        <a
                            href={item.path}
                            className={`flex items-center p-2 hover:bg-gray-700 transition-colors duration-200 pl-11 ${isOpen ? 'justify-start' : 'justify-start'
                                }`}
                        >
                            <span className="inline-block w-6 h-6 bg-white rounded-full"></span>
                            {isOpen && <span className="ml-4">{item.title}</span>}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SidebarElement;