import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active 
        ? 'border-b border-emerald-500'
        : '';

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold text-xl ${buttonClasses}`} >
                {children}
            </p>
        </button>
    );
};

export default TabButton;

