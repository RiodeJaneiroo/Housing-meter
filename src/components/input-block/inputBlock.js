import React from "react";

const InputBlock = ({onHandleChange, data, prevValue = ""}) => {
  const {title, type, name, value} = data;
  
  const currentMonth = value - prevValue;
  return (
    
    <div className="col-6">
        <div className="form-row">
          <div className="col">
            <div className="mb-2">{title}</div>
            <div className="form-group">
              <input className="form-control" value={prevValue} disabled />
              <small className="form-text text-muted">прошлый месяц</small>
            </div>
          </div>
          <div className="col">
            <div className="mb-2 text-secondary">{currentMonth > 0 ? currentMonth : '...'}</div>
            <div className="form-group">
              <input
                type={type}
                name={name}
                value={value}
                onChange={(e)=> onHandleChange(name, e.target.value)}
                className="form-control" />
              <small className="form-text text-muted">текущий месяц</small>
            </div>
          </div>
        </div>
      </div>
  )
}

export default InputBlock;