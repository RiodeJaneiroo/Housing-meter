import React, { Component } from "react";
import InputBlock from '../input-block/inputBlock'

export default class ItemAddForm extends Component {
  static defaultProps = {
    lastCounters: {}
  }
  state = {
    iceWater: { title: "Холодна вода", name: "iceWater", value: "" },
    hotWaterBack: { title: "Г.В.В", name: "hotWaterBack", value: "" },
    hotWater: { title: "Горячая вода", name: "hotWater", value: "" },
    gas: { title: "Газ", name: "gas", value: "" },
    light: { title: "Свет", name: "light", value: "" },
  }


  onSubmit = e => {
    e.preventDefault();

    const cb = this.props.onItemAdded;
    const form = e.target;

    const item = {
      iceWater: Number(form.iceWater.value),
      hotWater: Number(form.hotWater.value),
      hotWaterBack: Number(form.hotWaterBack.value),
      light: Number(form.light.value),
      gas: Number(form.gas.value),
      month: new Date(form.month.value)
    };    
    
    cb(item);
    form.reset();
  };
  handleChange = (name, val) => {
    this.setState((state)=>{
      const oldItem = state[name];
      return {
        [name]: {...oldItem, value: val}
      }
    });
  }
  getTwoDigitDateFormat = (monthOrDate) => (monthOrDate < 10) ? '0' + monthOrDate : monthOrDate;

  render() {
    const { onSubmit, handleChange, getTwoDigitDateFormat } = this;
    const { lastCounters } = this.props;
    const { iceWater, hotWaterBack, hotWater, gas, light } = this.state;

    const currentDate = new Date();
    const renderDate = `${currentDate.getFullYear()}-${getTwoDigitDateFormat(currentDate.getMonth() + 1)}`;

    
    
    return (
      <div className="col-md-8 mx-auto">
        <div className="d-flex justify-content-center">
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <InputBlock
                onHandleChange={handleChange}
                data={iceWater}
                prevValue={lastCounters.iceWater} />

              <InputBlock 
                onHandleChange={handleChange} 
                data={hotWaterBack} 
                prevValue={lastCounters.hotWaterBack} />

              <InputBlock 
                onHandleChange={handleChange} 
                data={hotWater} 
                prevValue={lastCounters.hotWater} />

              <InputBlock 
                onHandleChange={handleChange} 
                data={gas} 
                prevValue={lastCounters.gas} />

              <InputBlock 
                onHandleChange={handleChange} 
                data={light} 
                prevValue={lastCounters.light} />

              <div className="col">
                <div className="form-row">
                  <div className="col-12 mb-2">
                    <span className="text-success">Месяц</span>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <input
                        required
                        type="month"
                        name="month"
                        defaultValue={renderDate}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-success">
              Добавить
            </button>
          </form>
        </div>
      </div>
    );
  }
}
