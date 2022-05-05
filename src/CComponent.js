import React from 'react';
import { ThemeContext } from './App';
export default class CComponent extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(name) => <div>H{name}</div>}
      </ThemeContext.Consumer>
    );
  }
}
