import React from 'react';
import Select from 'react-select';
import {options, options_map} from '../../constants'


class Selector extends React.Component {

  handleChange = selectedOption => {
    this.props.handleValue(selectedOption);
  };
  render() {
    const { selectOption } = this.props;
    const val = {value: selectOption, label: options_map[selectOption]}
    return (
      <Select
        defaultValue={val}
        onChange={this.handleChange}
        options={options}
        classNamePrefix = "beverage_dropdown"
        className="beverage_selector"
      />
    );
  }
}

export default Selector;