import React from 'react';
import './style.css';
import A from './AComponent';
export const ThemeContext = React.createContext('light');
export default function App() {
  return (
    <ThemeContext.Provider value={'kedya'}>
      <h1>Hello StackBlitz!</h1>
      <A />
    </ThemeContext.Provider>
  );
}
