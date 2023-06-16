import React, { Component } from 'react';

class ColorBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      boxes: []
    };
  }

  handleColorChange = (event) => {
    this.setState({ color: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { color, boxes } = this.state;
    if (color) {
      const newBox = <div key={boxes.length} style={{ backgroundColor: color }} className="color-box"></div>;
      this.setState({ boxes: [...boxes, newBox], color: '' });
    }
  }

  render() {
    const { color, boxes } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Color:
            <input type="color" value={color} onChange={this.handleColorChange} />
          </label>
          <button type="submit">Add Box</button>
        </form>
        <div className="box-container">
          {boxes}
        </div>
      </div>
    );
  }
}

export default ColorBoxForm;

