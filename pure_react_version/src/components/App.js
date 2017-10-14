import React from 'react';

import '../styles/styles.scss';
import 'bootstrap';

import ColourList from './ColourList';
import AddColourForm from './AddColourForm';
import { v4 } from 'uuid';

window.React = React;

//APP
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colours: []
    };
    this.addColour = this.addColour.bind(this);
    this.rateColour = this.rateColour.bind(this);
    this.removeColour = this.removeColour.bind(this);
  }

  addColour(title, colour) {
    const colours = [
      ...this.state.colours,
      {
        id: v4(),
        title: title,
        colour: colour,
        rating: 0
      }
    ];
    this.setState({ colours });
  }

  rateColour(id, rating) {
    const colours = this.state.colours.map(
      (colour) => (colour.id !== id ? colour : { ...colour, rating })
    );
    this.setState({ colours });
  }

  removeColour(id) {
    const colours = this.state.colours.filter((colour) => colour.id !== id);
    this.setState({ colours });
  }

  render() {
    const { colours } = this.state;
    const { addColour, rateColour, removeColour } = this;
    return (
      <div>
        <h1>{this.props.name}</h1>
        <AddColourForm onNewColour={addColour} />
        <ColourList
          colours={colours}
          onRate={rateColour}
          onRemove={removeColour}
        />
      </div>
    );
  }
}

export default App;
