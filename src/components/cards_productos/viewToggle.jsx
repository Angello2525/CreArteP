import React from 'react';
import './viewToggle.css';

const ViewToggle = ({ viewMode, setViewMode }) => {
return (
    <div className="view-toggle">
    <button
        className={viewMode === 'grid' ? 'active' : ''}
        onClick={() => setViewMode('grid')}
    >
        🈚
    </button>
    <button
        className={viewMode === 'row' ? 'active' : ''}
        onClick={() => setViewMode('row')}
    >
        🈸
    </button>
    </div>
);
};

export default ViewToggle;

