import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {

class Form extends React.Component {
  render() {
    return <div className='first'>
      <form>
        <h1>Podaj imię:</h1>
        <input />
      </form>
    </div>
  }
}

class App extends React.Component {
  render() {
    return <Form />
  }
}

  ReactDOM.render(
      <App />,
document.getElementById('app')
);
})
