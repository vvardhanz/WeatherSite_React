import React, { component } from 'react';


export default class SearchBar extends component {
  constructor (props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
      console.log(event.target.value);
      this.setState({ term: event.target.value });
  }

  onFormSubmit( event ) {
      event.preventDefault();

      //We need to go and fetch weather data.
  }

  render() {
    return (
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
              placeholder="Get 5 day forcast in your favorite cities"
              className="form-control"
              value="{this.state.term}"
              onChange="{this.onInputChange}"
          />
          <span className="input-group-btn">
            <button  ype="submit" className="btn btn-secondary"> Submit </button>
          </span>
        </form>
    );
  }
}
