import React from "react";
import Spinner from "../spinner";

import "./item-list.css";

const ItemList = ({ items, onItemDelete }) => {
  
  if(items === null) {
    return (
      <div className="col-md-8 mx-auto mt-4">
        <Spinner />
      </div>
    );
  }

  if (!Object.keys(items).length) {
    return (
      <div className="col-md-8 mx-auto mt-4">
        <p>Внесите первые данные.</p>
      </div>
    );
  }

  items.sort((a,b) => b.month.seconds - a.month.seconds);

  const listItems = Object.values(items);
  const elements = listItems.map(item => {
    const { id, iceWater, hotWater, hotWaterBack, light, gas, month } = item;
    const renderTime = month.toDate().toLocaleDateString('ua-UA', {month: 'numeric', year: 'numeric'});
    
    return (
      <tr key={id}>
        <td>{renderTime}</td>
        <td>{iceWater}</td>
        <td>{hotWater}</td>
        <td>{hotWaterBack}</td>
        <td>{light}</td>
        <td>{gas}</td>
        <td>
          <button
            onClick={() => onItemDelete(id)}
            className="btn btn-danger btn-sm"
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="col-md-8 mx-auto mt-4">
      <h2 className="text-center">История</h2>
      <div className="table-responsive-xl">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Холодная вода</th>
              <th>Горячая вода</th>
              <th>Г.В.В</th>
              <th>Свет</th>
              <th>Газ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{elements}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemList;
