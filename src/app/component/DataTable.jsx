import React, { useState } from 'react';

const DataTable = ({ columns, data }) => {
  const [resizingColumn, setResizingColumn] = useState(null);
  const [resizeInitialX, setResizeInitialX] = useState(null);

  const onDragStart = (e, columnName) => {
    e.dataTransfer.setData('text/plain', columnName);
  };

  const onDrop = (e, targetColumn) => {
    const draggedColumn = e.dataTransfer.getData('text/plain');
    // Implement your logic toasdas reorder columns based on the dragged and target columns
    console.log(`Move column from ${draggedColumn} to ${targetColumn}`);
  };

  const onResizeStart = (e, column) => {
    setResizingColumn(column);
    setResizeInitialX(e.clientX);
  };

  const onResize = (e) => {
    if (resizingColumn) {
      const deltaX = e.clientX - resizeInitialX;
      // Implement your logic to resize the column based on the deltaX value
      console.log(`Resize column ${resizingColumn} by ${deltaX}`);
    }
  };

  const onResizeEnd = () => {
    setResizingColumn(null);
    setResizeInitialX(null);
  };

  return (
    <div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                draggable
                onDragStart={(e) => onDragStart(e, column)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => onDrop(e, column)}
                style={{
                  cursor: 'move',
                  userSelect: 'none',
                  background: resizingColumn === column ? '#efefef' : 'inherit',
                }}
              >
                {column}
                <div
                  className="resize-handle"
                  onMouseDown={(e) => onResizeStart(e, column)}
                  onMouseMove={onResize}
                  onMouseUp={onResizeEnd}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls (you can add your custom logic here) */}
      <div>
        <button onClick={() => console.log('Previous page')}>{'<<'}</button>
        <button onClick={() => console.log('Next page')}>{'>>'}</button>
      </div>
    </div>
  );
};

export default DataTable;
