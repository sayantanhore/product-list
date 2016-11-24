import React, {Component} from 'react';
require('./Search.scss');

export default class Search extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="div__search">
        <label className="label__pageheader">Phones</label>
        <div className="div__searchbox">
          <input
            type="text"
            placeholder="Search"
            className="input-text__search"/>
          <img
            src="media/icons/search.svg"
            className="img__search"/>
        </div>
      </div>
    );
  }
}
