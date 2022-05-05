import React from 'react';
import B from './BComponent';
export const NameContext = React.createContext('light');
export default class AComponent extends React.Component {
  render() {
    return (
      <NameContext.Provider value="sandip">
        A
        <B />
      </NameContext.Provider>
    );
  }
}
