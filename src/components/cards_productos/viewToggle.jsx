import React from 'react';
import './viewToggle.css';
import GridViewIcon from '@mui/icons-material/GridView'; // Ícono de cuadrícula
import ViewListIcon from '@mui/icons-material/ViewList'; // Ícono de lista (fila)

const ViewToggle = ({ viewMode, setViewMode }) => {
  console.log("Renderizando ViewToggle"); // Agregar log para depuración

return (
    <div className="view-toggle">
    <button
        className={viewMode === 'grid' ? 'active' : ''}
        onClick={() => setViewMode('grid')}
    >
        <GridViewIcon />
    </button>
    <button
        className={viewMode === 'row' ? 'active' : ''}
        onClick={() => setViewMode('row')}
    >
        <ViewListIcon />
    </button>
    </div>
);
};

export default ViewToggle;
