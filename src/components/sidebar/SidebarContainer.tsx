import React from 'react';

interface SidebarContainerProps {
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({ isOpen, onToggle, children }) => {
    return (
        <div className={`h-screen bg-secondary text-white ${isOpen ? 'w-72' : 'w-24'}`}>
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between ml-4 p-4">
                    {isOpen ?
                        <span className="text-4xl font-retrofunk tracking-wider text-primary">fortuna</span> : ''
                    }
                    <button
                        onClick={onToggle}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? '×' : '≡'}
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default SidebarContainer;