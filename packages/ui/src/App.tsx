import React from 'react';

interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <div className="App">
        <p id="test">Hallo Welt!</p>
      </div>
    );
  }
}
