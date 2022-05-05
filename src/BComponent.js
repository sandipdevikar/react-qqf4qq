import React from 'react';
import { ThemeContext } from './App';
import C from './CComponent';
import { NameContext } from './AComponent';
export default class BComponent extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <NameContext.Consumer>
            {(user) => (
              <div>
                {user}
                <C user={user} theme={theme} />
              </div>
            )}
          </NameContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
