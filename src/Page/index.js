import React, {Component} from 'react';
import Search from '../Components/Search';
require('./Page.scss');
export default class Page extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="div__page">
        <Search></Search>
      </div>
    );
  }
}
