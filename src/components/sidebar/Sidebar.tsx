import React, { useState } from 'react';
import SidebarContainer from './SidebarContainer';
import SidebarElement from './SidebarElement';

interface SidebarProps {
    defaultOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <SidebarContainer isOpen={isOpen} onToggle={toggleSidebar}>
            <SidebarElement isOpen={isOpen} />
        </SidebarContainer>
    );
};

export default Sidebar;