import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {

class Choose extends React.Component {
  render() {
    return <div className='choose'>
      <div className='create'>Create</div>
      <div className='preview'>Preview</div>
      <div className='export'>Export</div>
    </div>
  }
}

class Form extends React.Component {
  render() {
    return <div className='first'>
      <form>
        <h1>Podaj imię:</h1>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
      </form>
    </div>
  }
}

class App extends React.Component {
  render() {
    return <div>
      <Choose />
      <Form />
    </div>
  }
}

  ReactDOM.render(
      <App />,
document.getElementById('app')
);
})
