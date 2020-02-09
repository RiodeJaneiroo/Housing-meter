import React from 'react';
const spinner = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Загрузка...</span>
      </div>
    </div>
  );
}
export default spinner;