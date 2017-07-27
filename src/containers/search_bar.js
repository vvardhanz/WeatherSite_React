import React, { component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


export default class SearchBar extends component {
  constructor (props) {
    super(props);
    this.state = { term: '' };

    //Adding callbacks to the context.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
      console.log(event.target.value);
      this.setState({ term: event.target.value });
  }

  onFormSubmit( event ) {
      event.preventDefault();

      //We need to go and fetch weather data.
      this.props.fetchWeather(this.state.term);
      this.setState({ term: ''})
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

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
